import { dataBaseCollection } from "./index.js";

export const transfer = async (
  client,
  senderNo,
  receiverNo,
  amount,
  remark
) => {
  const session = await client.startSession();
  const transactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };
  try {
    await session.withTransaction(async () => {
      const senderChange = await createTransferDetailDocument(
        senderNo,
        amount * -1,
        remark
      );
      const receiverChange = await createTransferDetailDocument(
        receiverNo,
        amount,
        remark
      );

      await dataBaseCollection.updateOne(
        { account_number: senderNo },
        {
          $inc: { balance: amount * -1 },
          $push: { account_changes: senderChange },
        },
        { session }
      );
      await dataBaseCollection.updateOne(
        { account_number: receiverNo },
        {
          $inc: { balance: amount },
          $push: { account_changes: receiverChange },
        },
        { session }
      );
    }, transactionOptions);
  } catch (error) {
    await session.abortTransaction();
    console.log(error);
  } finally {
    await session.endSession();
  }
};

const createTransferDetailDocument = async (account_number, amount, remark) => {
  const account = await dataBaseCollection.findOne({
    account_number: account_number,
  });

  const numberOfChanges = account["account_changes"].length;
  let account_change = {
    change_number: numberOfChanges + 1,
    amount: amount,
    changed_date: new Date(),
    remark: remark,
  };
  return account_change;
};
