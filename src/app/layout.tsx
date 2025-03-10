import "./globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME } from "@config/appConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: `%s - ${APP_NAME}`, default: APP_NAME },
  description: `${APP_NAME}: Modern finance SaaS for seamless budgeting, analytics, and growth. Powered by Next.js, Convex, and Hono. Start optimizing today!`,

  creator: `Chetan Seervi`,
  applicationName: APP_NAME,
  keywords: [
    `Finance SaaS`,
    `Financial management software`,
    `Budgeting tool`,
    `Next.js finance platform`,
    `Convex finance app`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`en`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
