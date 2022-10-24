import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioDisplay } from "../../../../interfaces";
import { images } from "../../../../data";

export default function muralsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Array<PortfolioDisplay>>
): void {
  const murals = images.murals;
  res.status(200).json(murals);
}
