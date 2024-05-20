
const mongoose = require('mongoose');
getDataBase().catch(err => console.log(err));

async function getDataBase(){
    //DataBase Connection With MongoDB
const encodedPassword = encodeURIComponent("098112@kec");
await mongoose.connect(`mongodb+srv://sivvignesh:${encodedPassword}@cluster0.o131g3b.mongodb.net/`).then(()=>{
    console.log('Database connected...!');
});
   
}

module.exports = {
    getDataBase
}