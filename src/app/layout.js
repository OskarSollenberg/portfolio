import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/src/components/SiteHeader";
import MainNav from "@/src/components/MainNav";
import SocialMedia from "../components/SocialMedia";
import ProgressBar from "../components/ProgressBar";
import DynamicHeader from "../components/DynamicHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <div className="flex relative justify-center items-center">
          <SiteHeader index={200} />
          {children}
          <MainNav index={200} />
          <DynamicHeader index={300} />
          <ProgressBar index={200} />
          <SocialMedia index={200} />
        </div>
      </body>
    </html>
  );
}
