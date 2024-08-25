import type { Metadata } from "next";
import  Header  from "./components/Header/header";
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
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
