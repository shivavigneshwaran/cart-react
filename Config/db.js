const mongoose = require('mongoose');
require('dotenv').config();

async function getDataBase() {
    // Retrieve the MongoDB URL from the environment variables
    const dbUrl = process.env.MONGODB_URL;

    // Connect to MongoDB
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected...!');
    }).catch(err => console.log('Database connection error:', err));
}

module.exports = {
    getDataBase
};
