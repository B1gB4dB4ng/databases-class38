import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { cleanUp, createNewAccount } from "./setup.js";
import { transfer } from "./transfer.js";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL);

export const dataBaseCollection = client
  .db("databaseWeek4")
  .collection("accounts");

const main = async () => {
  client.connect();
  try {
    await cleanUp();
    await createNewAccount(101, 400);
    await createNewAccount(102, 800);
    await transfer(client, 101, 102, 300, "Rent");
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
};

main();
