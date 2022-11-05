import { type NextPage } from "next";
import Head from "next/head";

const NotSecret: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center  p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          NOT so Secret <span className="text-purple-300">T3</span> Page
        </h1>
      </main>
    </>
  );
};

export default NotSecret;
