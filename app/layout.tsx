import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} antialiased`}>{children}</body>
    </html>
  );
}
