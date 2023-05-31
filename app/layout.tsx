import Banner from "./Banner";
import Header from "./Header";
import "./globals.css";
import { Silkscreen } from "next/font/google";
import localFont from "next/font/local";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const karmaticArcade = localFont({
  src: "../public/fonts/KarmaticArcade.ttf",
  display: "swap",
});

export const metadata = {
  title: "Pixels",
  description: "Generated by create next app",
};

export const navigation = [
  {
    name: "Trade",
    url: "/trade",
  },
  { name: "Studio", url: "/studio" },
  { name: "Docs", url: "https://github.com" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${silkscreen.className}`}>
      <body className="flex flex-col h-screen bg-[url(/tile.svg)] [background-size:50px]">
        <Banner />
        <Header />
        {children}
      </body>
    </html>
  );
}