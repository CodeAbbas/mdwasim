import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Wasim | Business & Logistics Consultant",
  description: "Logistics and Customer Service professional with 6+ years experience optimizing supply chains and CRM workflows. MSc International Business Management.",
  keywords: ["Logistics", "Supply Chain", "Business Analyst", "Microsoft Dynamics 365", "Salesforce", "London"],
  openGraph: {
    title: "Mohammad Wasim | Consultant & Operations Expert",
    description: "Optimizing supply chains and elevating customer experiences.",
    url: "https://wasim-portfolio.com",
    siteName: "Mohammad Wasim",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://wasim-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Wasim Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Wasim | Consultant",
    creator: "@wasim_contact",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Light theme default, dark mode ready via Tailwind 'dark:' variants */}
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900 dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
