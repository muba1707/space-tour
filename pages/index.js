import Head from "next/head";
import Homes from "../components/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Let's go to space</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/assets/shared/logo.svg" />
      </Head>
      <Homes />
    </div>
  );
}
