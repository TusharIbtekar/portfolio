import { Theme } from "@/types";
import { Navbar } from "@/components";
import { Footer } from "@/components/Footer";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/Providers";

export const metadata = {
  title: "Tushar Ibtekar",
  description: "Turning caffeine into code",
  keywords: ["Software Enginner", "React.js", "Next.js", "Backend", "Frontend"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme={Theme.DARK} enableSystem>
          <Navbar.Standard />
          <div className="flex flex-col justify-center px-8">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
