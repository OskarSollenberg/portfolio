import Head from "next/head";
import SiteNav from "@/src/components/SiteNav";

const metadata = {
  title: "Oskar Herman Sollenberg - About Me",
  description:
    "Learn more about Oskar Herman Sollenberg and his journey of becoming a web developer.",
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <SiteNav isHomepage={false} />
      {children}
    </>
  );
}