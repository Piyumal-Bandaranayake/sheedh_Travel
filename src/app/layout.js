import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import Preloader from "../components/Preloader";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins-custom",
});

const notoLabels = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Sheedh Tours & Travels | Explore Sri Lanka",
  description: "Official website of Sheedh Tours & Travels. Discover the beauty of Sri Lanka with our personalized travel packages and vehicle rentals.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoLabels.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col relative text-primary">
        <Suspense fallback={null}>
          <Preloader />
        </Suspense>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
