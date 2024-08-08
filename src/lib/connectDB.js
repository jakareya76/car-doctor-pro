import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  const uri = process.env.NEXT_PUBLIC_DB_URI;

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("car-doctor");
    return db;
  } catch (error) {
    console.log(error);
  }
};
