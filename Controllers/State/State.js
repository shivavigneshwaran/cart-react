const State = require('../../Modals/State');

const addState = async (req,res) => {
	try{
		const { name, code, country } = req.body;
		
		 if (!name || !code || !country) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const existState = await State.exists({
			$or:[{name:name},{code:code}]
		});
		if(existState){
			return res.status(403).json({status:"Success",data:"State Already Exists"});
		}
		const state = new State({
			name:name,
			code:code,
			country:country
		});
		await state.save();
		return res.status(200).json({status:"Success",data:state});
	}catch(error){
		return res.status(500).json({status:"Fail",error:error});
	}
}

const getStates = async (req,res,next)=>{
	try{
		const state = await State.find({deletedAt:null},"_id name code");
		if(country){
			return res.status(200).json({status:"Success",data:state})
		}else{
			return res.status(204).json({status:"Success",data:"State is Empty..!"});
		}

	}catch(error){
		console.error('Error while saving Country:', error);
        return res.status(500).json({ success: false, error:error,message:"Something Went Wrong..!"});

	}
}
module.exports = {
		addState,
		getStates
}
