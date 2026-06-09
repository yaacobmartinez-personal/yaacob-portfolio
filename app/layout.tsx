import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// ─── Structured data ────────────────────────────────────────────────────────
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ??
  "https://yaacobmartinez.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yaacob Martinez",
  jobTitle: "Full Stack Web Developer",
  description:
    "Senior Software Engineer at Cambridge University Press & Assessment with 8+ years of experience building scalable web applications.",
  url: BASE_URL,
  email: "martinezyaacob@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malolos, Bulacan",
    addressCountry: "PH",
  },
  sameAs: [
    "https://github.com/yaacobmartinez-personal",
  ],
  knowsAbout: [
    "Next.js", "React", "TypeScript", "Node.js",
    "AWS", "Supabase", "PostgreSQL", "Full Stack Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yaacob Martinez — Portfolio",
  url: BASE_URL,
  description: "Portfolio of Yaacob Martinez, Full Stack Web Developer.",
};

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Yaacob Martinez — Full Stack Web Developer",
  description:
    "Senior Software Engineer at Cambridge University Press & Assessment. 8+ years building scalable web applications from pixel to database.",
  authors: [{ name: "Yaacob Martinez", url: BASE_URL }],
  keywords: [
    "Full Stack Web Developer", "Next.js Developer", "React Developer",
    "TypeScript", "Node.js", "Philippines", "Remote Developer",
    "Yaacob Martinez",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Yaacob Martinez — Full Stack Web Developer",
    description:
      "Senior Software Engineer at Cambridge University Press & Assessment. 8+ years building scalable web applications.",
    type: "website",
    url: BASE_URL,
    siteName: "Yaacob Martinez",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaacob Martinez — Full Stack Web Developer",
    description:
      "8+ years building scalable web apps. Next.js · React · TypeScript · Node.js · AWS.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Inline script injected before hydration — prevents flash of wrong theme */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* FOUC prevention — must run before React hydrates */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Structured data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Structured data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-bg text-ink antialiased">
        {/* Skip navigation — visually hidden until focused, helps screen readers & crawlers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
