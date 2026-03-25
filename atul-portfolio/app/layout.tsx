import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atul — Backend Engineer",
  description:
    "Portfolio of Atul, a backend engineer who builds the stuff you don't see. APIs, queues, distributed systems, the infrastructure layer that keeps everything from falling apart.",
  keywords: [
    "Backend Engineer",
    "Fintech",
    "Distributed Systems",
    "API Design",
    "Portfolio",
    "Atul",
  ],
  authors: [{ name: "Atul" }],
  openGraph: {
    title: "Atul — Backend Engineer",
    description: "I build systems that don't break.",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
