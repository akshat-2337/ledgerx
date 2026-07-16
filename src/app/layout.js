import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "LedgerX",
  description: "nextJS application for LedgerX",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={'${inter.className} bg-background text-foreground antialiased'}>
      <body className="min-h-screen flex flex-col bg-[#0E1111]">

        <main className="min-h-screen">{children}</main>

        <footer className="bg-[#1A1D1D] text-[#FFFFFF] p-4 text-center">
          <div>
            <p> Made by <a href="https://github.com/akshat-2337" className="text-[#4F46E5] hover:underline" target="_blank" rel="noopener noreferrer">akshat-2337</a> </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
