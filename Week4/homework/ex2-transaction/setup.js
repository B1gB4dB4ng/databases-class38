import { dataBaseCollection } from "./index.js";

export const cleanUp = async () => {
  await dataBaseCollection.deleteMany({});
};

export const createNewAccount = async (account_number, balance) => {
  const account = {
    account_number: account_number,
    balance: balance,
    account_changes: [],
  };

  const insertAccount = await dataBaseCollection.insertOne(account);
};
