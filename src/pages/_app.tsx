import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { Header } from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontSans.style.fontFamily};
          @apply min-h-screen bg-background font-sans antialiased;
        }
      `}</style>

      <Header />
      <Component {...pageProps} />
    </>
  );
}
