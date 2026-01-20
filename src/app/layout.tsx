import type { Metadata } from "next";
import "./globals.scss";
import "./responsive.scss";
import Script from "next/script";
import Header from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Jonathan Díaz - Portfolio",
  description:
    "Desarrollador de software con enfoque en el producto y funcionalidades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/9a7107e667.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <link
          rel="stylesheet"
          href="https://i.icomoon.io/public/temp/27d5cf4f96/UntitledProject/style-svg.css"
        />
        <Script
          src="https://i.icomoon.io/public/temp/27d5cf4f96/UntitledProject/svgxuse.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
