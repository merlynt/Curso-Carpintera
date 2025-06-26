const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://host.docker.internal:27017/dbcarpinteria");
    console.log("✅ Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
  }
};

module.exports = dbConnect;
