const Country = require('../../Modals/Country');

const getCountrys = async (req,res,next)=>{
	try{
		const country = await Country.find({deletedAt:null},"_id name code");
		if(country){
			return res.status(200).json({status:"Success",data:country})
		}else{
			return res.status(204).json({status:"Success",data:"Country is Empty..!"});
		}

	}catch(error){
		console.error('Error while saving Country:', error);
        return res.status(500).json({ success: false, error:error,message:"Something Went Wrong..!"});

	}
}

const AddCountry = async (req,res)=>{
	try {
        const { name,code } = req.body;
        const existCountry = await Country.exists({
        	$or:[
        	{name:name},
        	{code:code}
        	]
        });
        if(existCountry){
        	return res.status(403).json({success:"Success",data:"Data Already Exists"});
        }
        const country = new Country({
            name:name,
            code:code
        });
        console.log(country);
        await country.save();
        return res.status(200).json({ status:"Success" , name: name });
    } catch (error) {
        console.error('Error while saving product:', error);
        return res.status(500).json({ success: false, error:error,message:"Something Went Wrong..!"});
    }
}

module.exports = {
	AddCountry,
	getCountrys
}