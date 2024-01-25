import Head from "next/head";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abstrabit Assignment</title>
        <meta name="description" content="Assignment for abstrabit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
