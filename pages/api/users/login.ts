import { AsyncResource } from "async_hooks";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/userModels";
import connectMongo from "../../../utils/connectMongoDB";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();

  const users = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).json({
    status: "success",
    users,
  });
}
