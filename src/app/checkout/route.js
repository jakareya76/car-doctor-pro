import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();

  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");

  try {
    const res = await bookingsCollection.insertOne(booking);
    return Response.json({ message: "booking added successfully", res });
  } catch (error) {
    console.log(error);
  }
};
