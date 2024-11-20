require("dotenv").config();
const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@partytimescluster.bqgzm.mongodb.net/?retryWrites=true&w=majority&appName=PartyTimesCluster`
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
