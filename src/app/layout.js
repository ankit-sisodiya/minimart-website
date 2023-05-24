import "./globals.css";
import "./temp.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
