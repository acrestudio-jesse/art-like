import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/userModels";
import connectMongo from "../../../utils/connectMongoDB";

export default async function createUserHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  console.log("Connecting to MongoDB....");
  await connectMongo();
  console.log("Connection established ⛳");

  console.log("Creating User...");
  const user = await User.create(req.body);
  console.log("User completed ⛳");
  res.status(201).json({
    status: "success",
    user,
  });
}
