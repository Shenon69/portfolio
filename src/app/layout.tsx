import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/common/container";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trishan Phillipsz",
  description: "Trishan Phillipsz's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={DMSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
