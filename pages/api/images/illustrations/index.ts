import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioDisplay } from "../../../../interfaces";
import { images } from "../../../../data";

export default function illustrationsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Array<PortfolioDisplay>>
): void {
  const illustrations = images.illustrations;
  res.status(200).json(illustrations);
}
