const User = require("../../Modals/User");

const getUserAddress = async(req,res)=>{
	try{
		const { id } = req.query;
		if(!id){
            return res.status(400).json({ message: 'User Id feild Required..!' });
		}
		const userAddress = await User.findById(id,"_id name phone addressId").populate('addressId').exec();
		return res.status(200).json({status:"Success",data:userAddress});
	}catch(error){
		return res.status(500).json({status:"Fail",error:error});
	}
}

module.exports = {
	getUserAddress
}

