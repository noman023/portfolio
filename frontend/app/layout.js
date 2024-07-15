import "./globals.css";
import { Inter, Dancing_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const dancingScript = Dancing_Script(
  { subsets: ["latin"] },
  { weight: "700" }
);

export const metadata = {
  title: "Noman's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
