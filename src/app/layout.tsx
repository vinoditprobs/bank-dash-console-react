import type { Metadata } from "next";
import "./styles/style.scss";

export const metadata: Metadata = {
  title: "BankDash Console",
  description: "Bank Dash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
