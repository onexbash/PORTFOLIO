import "@/css/globals.css";
import siteMetadata from "@/data/siteMetadata";
import { Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import BackgroundGrid from "@/components/background-grid";
import ActiveSectionContextProvider from "@/components/active-session-context";
import TabNavigationDisable from "@/components/tab-key-navigation-disable";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <TabNavigationDisable />
      <body className="relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="absolute max-h-[50vh] w-full overflow-hidden bg-gradient-to-t   from-background to-transparent dark:from-mantle_color "></div>
          <ActiveSectionContextProvider>
            <section className="relative z-10">
              <BackgroundGrid />
              <div className="flex h-screen flex-col font-sans">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
            </section>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
