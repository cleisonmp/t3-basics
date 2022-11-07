import type { NextApiRequest, NextApiResponse } from "next";
import { appRouter } from "../../server/trpc/router/_app";
import { prisma } from "../../server/db/client";
import { env } from "../../env/server.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("at cron");

  if (req.method === "POST") {
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${env.CRON_SECRET_KEY}`) {
        console.log("after authorization");
        const trpcCaller = appRouter.createCaller({
          session: null,
          prisma: prisma,
        });
        console.log("after createCaller");
        const result = await trpcCaller.guestbook.cronMessage({
          name: "cron messager",
          message: `send from cron at ${new Date().toLocaleDateString()}`,
        });
        console.log("after primsa");

        res.status(200).json({ success: true });
      } else {
        console.log("wrong token");
        res.status(401).json({ success: false });
      }
    } catch (err) {
      console.log("error");
      if (err instanceof Error) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
    }
  } else {
    console.log("error Method Not Allowed");
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
