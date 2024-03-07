import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/src/components/SiteHeader";
import MainNav from "@/src/components/MainNav";
import SocialMedia from "../components/SocialMedia";
import ProgressBar from "../components/progressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <section className="flex justify-center items-center">
          <MainNav />
          <SocialMedia />
          <ProgressBar />
        </section>
      </body>
    </html>
  );
}
