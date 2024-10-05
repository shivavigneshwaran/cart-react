const Address = require('../../Modals/Address');

const addAddress = async (req,res)=>{
	try{
		const {address,pincode,landmark,cityTown,stateId,countryId,userId} = req.body;
		const addressModel = new Address({
			address:address,
			pincode:pincode,
			landmark:landmark,
			cityTown:cityTown,
			stateId:stateId,
			countryId:countryId,
			userId:userId
		});
		await addressModel.save();
		return res.status(200).json({status:"Success",data:addressModel});
	}catch(error){
		console.log("Error: ", error);
		return res.status(500).json({_status:"Fail",data:error.message || error});
	}
}

module.exports = {
	addAddress
}