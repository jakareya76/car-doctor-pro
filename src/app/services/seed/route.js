import { connectDB } from "@/lib/connectDB";
import { services } from "@/temp/services";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = await db.collection("services");

  try {
    await servicesCollection.deleteMany();
    const res = await servicesCollection.insertMany(services);
    return Response.json({ message: "seeded successfully", res });
  } catch (error) {
    console.log(error);
  }
};
