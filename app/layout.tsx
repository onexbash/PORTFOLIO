import "@/css/globals.css";
import siteMetadata from "@/data/siteMetadata";
import { Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import ActiveSectionContextProvider from "@/components/active-session-context";

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
  return;
  <html
    lang={siteMetadata.language}
    className={`${space_grotesk.variable} scroll-smooth`}
    suppressHydrationWarning
  >
    <body className="relative">
      <ActiveSectionContextProvider>
        <section className="relative z-10 ">
          <main>{children}</main>
        </section>
      </ActiveSectionContextProvider>
    </body>
  </html>;
}
