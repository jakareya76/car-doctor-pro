import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  const uri = `mongodb+srv://jakareya1306:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.yuavsug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
