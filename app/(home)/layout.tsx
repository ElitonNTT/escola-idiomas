import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centro de Idiomas",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Script src="/facebook.js" strategy="afterInteractive" />
      <Script src="/tiktok.js" strategy="afterInteractive" />
      <Script src="/tagmanager.js" strategy="afterInteractive" />
      <Script src="/analytics.js" strategy="afterInteractive" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5MGRM97"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/bb4c0069-b896-46e7-81ca-d78821d185f0-loader.js"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
