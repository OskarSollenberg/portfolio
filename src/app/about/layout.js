import Head from "next/head";
import SiteNav from "@/src/components/SiteNav";
import SiteHeader from "@/src/components/SiteHeader";
import { metadata } from "./metadata";

export default function AboutLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <SiteNav isHomepage={false} />
      <SiteHeader />
      {children}
    </>
  );
}
