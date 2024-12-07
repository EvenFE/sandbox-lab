import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(rq: NextApiRequest, rs: NextApiResponse) {
  const date = new Date();
  rs.status(200).json({ currentTime: date.toLocaleString() });
}
