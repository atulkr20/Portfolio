import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Atul — Backend Engineer",
  description:
    "Portfolio of Atul, a backend engineer who builds the stuff you don't see. APIs, queues, distributed systems, the infrastructure layer that keeps everything from falling apart.",
  keywords: [
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Docker",
    "Distributed Systems",
    "API Design",
    "Fintech",
    "Portfolio",
    "Atul",
  ],
  authors: [{ name: "Atul", url: "https://github.com/atulkr20" }],
  openGraph: {
    title: "Atul — Backend Engineer",
    description:
      "I build systems that don't break. APIs, queues, distributed systems — the infrastructure layer that keeps everything from falling apart.",
    url: "https://itsatul.tech",
    siteName: "Atul's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul — Backend Engineer",
    description:
      "I build systems that don't break. APIs, queues, distributed systems — the infrastructure layer that keeps everything from falling apart.",
    creator: "@atulkr20",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
