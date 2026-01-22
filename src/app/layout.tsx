import type { Metadata } from "next";
import "./globals.scss";
import "./responsive.scss";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Jonathan Díaz - Portfolio",
  description:
    "Desarrollador de software con enfoque en el producto y funcionalidades",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  /* if (!routing.locales.includes(locale as any)) {
    notFound();
  } */

  const messages = await getMessages();
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
