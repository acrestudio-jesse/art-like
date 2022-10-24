import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioDisplay } from "../../../../interfaces";
import { images } from "../../../../data";

type ResponseError = {
  message: string;
};

export default function oneMuralHandler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioDisplay | ResponseError>
) {
  const { id } = req.query;
  const oneMural = images.murals.filter((pic) => pic.id === id);

  return oneMural.length > 0
    ? res.status(200).json(oneMural[0])
    : res.status(404).json({ message: `Mural with id ${id} not found.` });
}
