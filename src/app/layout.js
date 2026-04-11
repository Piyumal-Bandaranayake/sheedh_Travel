import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins-custom",
});

export const metadata = {
  title: "SAMEEDH Tours & Travels | Explore the World",
  description: "Official website of SAMEEDH Tours & Travels. Discover breathtaking destinations and personalized travel packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
