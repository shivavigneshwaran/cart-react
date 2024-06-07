const jwt = require("jsonwebtoken");
const User = require('../../Modals/User');
const bcrypt = require('bcryptjs');

const register = async (req,res) => {
    console.log("Register endpoint hit");
    let check = await User.findOne({email:req.body.email});
    if(check){
    return res.status(400).json({success:false,error:"The User Is Already Existing"});
    }
    let cart = {} ;
    for (let i=0;i<300;i++){
        cart[i]=0;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    console.log('hashedPassword',hashedPassword);
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        cartData:cart,
    
    });
    await user.save();
    const data = {
        user:{
            id:user.id,
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    
    res.status(200).json({success:true,token:token});
}


const login = async (req,res)=>{

    try {

        const {name,email,password} = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });
         // Check if password is correct
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) return res.status(400).json({ message: 'password is invalid' });
         const data = {
            user:{
                id: user.id,

            }
         }

         const token = jwt.sign(data, process.env.JWT_SECRET || 'secret_ecom', { expiresIn: '1h' });
       return  res.status(200).json({status:"success",token :token,user:user });
        
    } catch (error) {
        
    }
    
 
 }

module.exports = {
    register,
    login
}