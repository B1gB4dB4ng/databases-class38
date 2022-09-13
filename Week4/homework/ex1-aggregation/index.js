const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const csvtojson = require("csvtojson");

dotenv.config();
const db = "databaseWeek4";
const collection = "Population";

const main = async () => {
  const client = new MongoClient(process.env.MONGODB_URL);
  try {
    await importData(client);
    await getPopulationCountry(client, "China");
    await getPopulationYearAge(client, "100+", "2020");
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

const importData = async (client) => {
  const populationJsonData = await csvtojson().fromFile(
    "population_pyramid_1950-2022.csv"
  );
  await client.db(db).collection(collection).deleteMany();
  const result = await client
    .db(db)
    .collection(collection)
    .insertMany(populationJsonData);
};

const getPopulationCountry = async (client, country) => {
  const totalPopulation = [
    {
      $match: { Country: `${country}` },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: {
          $sum: { $add: [{ $toInt: "$M" }, { $toInt: "$F" }] },
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ];

  const cursor = await client
    .db(db)
    .collection(collection)
    .aggregate(totalPopulation);
  const results = await cursor.toArray();
  results.forEach((result) => console.log(result));
};

const getPopulationYearAge = async (client, age, year) => {
  const populationYearAge = [
    {
      $match: {
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
      },
    },
    { $match: { Year: year } },
    { $match: { Age: age } },
    {
      $addFields: {
        TotalPopulation: {
          $add: [{ $toInt: "$M" }, { $toInt: "$F" }],
        },
      },
    },
  ];
  const cursor = client
    .db(db)
    .collection(collection)
    .aggregate(populationYearAge);
  const results = await cursor.toArray();
  results.forEach((result) => console.log(result));
};
main();
