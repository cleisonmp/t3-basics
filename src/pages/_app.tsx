import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Link from "next/link";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <header className="sticky top-0 z-50 bg-neutral-900">
        <p>Pages:</p>
        <nav className="flex gap-4 p-4">
          <Link href="/" className="underline">
            Home
          </Link>
          <Link href="image" className="underline">
            Image Upload
          </Link>
          <Link href="secret" className="underline">
            Private
          </Link>
          <Link href="notsecret" className="underline">
            Public
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
