import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "../components/SiteNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <div className="flex justify-center items-center">
          {children}
          <SiteNav />
        </div>
      </body>
    </html>
  );
}
