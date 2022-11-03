import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Messages } from "../components/Messages";
import { Form } from "../components/Form";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  const handleDiscordSignIn = () => {
    signIn("discord");
  };
  const handleLogout = () => {
    signOut();
  };
  handleLogout;

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  console.log(session);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center  p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        {session ? (
          <>
            <p>hi {session.user?.name}</p>

            <button onClick={handleLogout}>Logout</button>
            <div className="pt-6">
              <Form />
            </div>
          </>
        ) : (
          <button onClick={handleDiscordSignIn}>Login with Discord</button>
        )}
        <div className="pt-10">
          <Messages />
        </div>
      </main>
    </>
  );
};

export default Home;