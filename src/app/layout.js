import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAR DOCTOR",
  description: "car doctor",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
