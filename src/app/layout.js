import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAR DOCTOR",
  description: "car doctor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
