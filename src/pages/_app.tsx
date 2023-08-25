import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import { Theme } from "@/types";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={Theme.DARK} enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
