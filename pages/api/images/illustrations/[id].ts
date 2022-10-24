import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioDisplay } from "../../../../interfaces";
import { images } from "../../../../data";

type ResponseError = {
  message: string;
};

export default function oneIllustrationHandler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioDisplay | ResponseError>
) {
  const { id } = req.query;
  const oneIllustration = images.illustrations.filter((pic) => pic.id === id);

  return oneIllustration.length > 0
    ? res.status(200).json(oneIllustration[0])
    : res
        .status(404)
        .json({ message: `Illustration with id ${id} not found.` });
}
