const Product = require('../../Modals/Product');
const port = 4000;
const products = async (req,res) => {
        try {
            const products = await Product.find();
            if(!products){
                return res.status(400).json({message:"Product is Empty"});
            }else{
                return res.status(200).json({data:products});
            }

        } catch (error) {
            
        }
}
const addproduct = async (req, res) => {
    try {
        const { id, name, image, category, new_price, old_price } = req.body;
        const product = new Product({
            id: id,
            name: name,
            image: image,
            category: category,
            new_price: new_price,
            old_price: old_price,
        });
        console.log(product);
        await product.save();
        console.log('Product saved successfully');
        return res.json({ success: true, name: name });
    } catch (error) {
        console.error('Error while saving product:', error);
        res.status(500).json({ success: false, error: 'Failed to save product' });
    }
}

const uploadImage = (req,res)=>{
    res.json({
        success:1,
        imageUrl:`http://localhost:${port}/images/${req.file.filename}`
    })
};

module.exports = {
    addproduct,
    uploadImage,
    products
}