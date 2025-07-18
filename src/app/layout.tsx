import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cozymate ADMIN Page",
  description: "cozymate 관리자 페이지입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
