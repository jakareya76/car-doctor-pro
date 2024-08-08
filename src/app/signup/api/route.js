import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    const exist = await userCollection.findOne({ email: newUser.email });

    if (exist) {
      return Response.json({ message: "user already exist" }, { status: 409 });
    }

    const hashPassword = bcrypt.hashSync(newUser.password, 10);

    const user = {
      name: newUser.name,
      email: newUser.email,
      password: hashPassword,
    };

    const res = await userCollection.insertOne(user);
    return Response.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "something went wront", error },
      { status: 500 }
    );
  }
};
