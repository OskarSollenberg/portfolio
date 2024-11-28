import Head from "next/head";
import { metadata } from "./metadata";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>{children}</div>
    </>
  );
}
