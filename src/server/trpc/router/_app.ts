import { router } from "../trpc";
import { authRouter } from "./auth";
import { guestbookRouter } from "./guestbook";
import { imagebankRouter } from "./imagebank";

export const appRouter = router({
  guestbook: guestbookRouter,
  imagebank: imagebankRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
