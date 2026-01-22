import type { Metadata } from "next";
import "../globals.scss";
import "../responsive.scss";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Jonathan Díaz - Portfolio",
  description:
    "Desarrollador de software con enfoque en el producto y funcionalidades",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  console.log("-------------locale", locale);
  console.log("-------------messages", messages);
  return (
    <html lang={locale}>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
