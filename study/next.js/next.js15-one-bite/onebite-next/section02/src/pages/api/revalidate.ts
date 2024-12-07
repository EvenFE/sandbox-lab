import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(rq: NextApiRequest, rs: NextApiResponse) {
  try {
    await rs.revalidate("/"); // index 경로의 페이지를 재생성
    return rs.json({ revalidate: true });
  } catch (error) {
    return rs.status(500).send("Revalidation Failed");
  }
}
