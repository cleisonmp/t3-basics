import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const imagebankRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.imagebank.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  postMessage: protectedProcedure
    .input(
      z.object({
        fileKey: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.imagebank.create({
          data: {
            fileKey: input.fileKey,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
