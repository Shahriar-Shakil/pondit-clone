import "./globals.css";
import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali } from "next/font/google";

const hind = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hind",
});
const nato = Noto_Sans_Bengali({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nato",
});

export const metadata: Metadata = {
  title: "Inspired IT - Skilled Freelancing Course For ALL",
  description:
    "Inspired IT, সুনির্দিষ্ট ও সুনির্ধারিত ও সময় উপযোগী কোর্স মডিউল অনুসরণ করে প্রশিক্ষনার্থীদের দক্ষতা উন্নয়ন এবং ফ্রিল্যান্সিংয়ে...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.variable} ${nato.variable}`}>{children}</body>
    </html>
  );
}
