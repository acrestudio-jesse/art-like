import type { NextApiRequest, NextApiResponse } from "next";
import { images } from "../../../data";

export default function imagesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    status: "success",
    data: images,
  });
}
