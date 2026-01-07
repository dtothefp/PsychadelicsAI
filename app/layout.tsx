import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Outfit,
  Playfair_Display,
  Montserrat,
  Crimson_Text,
} from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-alt-1",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-alt-2",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alt-3",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-alt-4",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-alt-5",
});

export const metadata: Metadata = {
  title: "🤖 Psychedelics.ai 💫",
  description:
    "Explore the frontiers of consciousness and artificial intelligence. Join the journey into the unknown with psychedelics.ai - where technology meets transcendence.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "🤖 Psychedelics.ai 💫",
    description:
      "Explore the frontiers of consciousness and artificial intelligence. Join the journey into the unknown.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} ${playfair.variable} ${montserrat.variable} ${crimson.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
