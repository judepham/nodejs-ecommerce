const mongoose = require("mongoose");
const uri =
  "mongodb+srv://phduy1905:Fabregas1905@cluster0.ubbuuam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const { countConnect } = require("../helper/check-connect");
class Database {
  constructor() {}

  connect(type = "mongoddb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", {
        color: true,
      });
    }

    mongoose
      .connect(uri, {
        maxPoolSize: 50,
      })
      .then((_) => {
        countConnect();
        console.log("Database connected successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
      Database.instance.connect();
    }

    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();
module.exports = instanceMongoDb;
