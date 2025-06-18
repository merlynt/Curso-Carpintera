const mongoose = require("mongoose");


const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL || 'mongodb://host.docker.internal:27017/dbcarpinteria')
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "error de coneccion a MongoDB:"));
    db.once("open", () => {
    });
}

module.exports = dbConnect;