const mongoose = require("mongoose");

const databaseConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Database connected on ${connect.connection.name}`);
  } catch (error) {
    console.error("Cant connect database", error);
  }
};

module.exports = databaseConnect;
