const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Database connection established!");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;