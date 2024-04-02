import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oskar Herman Sollenberg - Web Developer",
  description:
    "Portfolio website of Your Oskar Herman Sollenberg, a web developer aiming to create beautiful,  accessible and functional websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <body className={` ${inter.className}`}>
        <div className="homePage flex justify-center items-center">
          {children}
          {/* <TopNav /> */}
        </div>
      </body>
    </html>
  );
}
