const mongoose = require('mongoose');
require('dotenv').config();

async function getDataBase() {
    //DataBase Connection With MongoDB
    const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);
    const dbUrl = `mongodb+srv://sivvignesh:${encodedPassword}@cluster0.o131g3b.mongodb.net/`;
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected...!');
    }).catch(err => console.log('Database connection error:', err));
}

module.exports = {
    getDataBase
}
