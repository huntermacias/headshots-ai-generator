// Import statements remain unchanged
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Elite Portraits | AI-Driven Headshot Revolution",
  description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
};

export default function RootLayout({ children }:any) {
  return (
    <>
      <head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content="/public/hero2.webp" /> {/* Replace with the path to your image */}
  <meta property="og:url" content="https://headshothub.vercel.app/" /> {/* Replace with your domain */}
  <meta property="og:site_name" content="Headshots AI" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
  <meta name="og:image" content="/public/hero2.webp" /> {/* Replace with the path to your Twitter-specific image */}
  <meta name="twitter:site" content="@huntermacias_" /> {/* Replace with your Twitter handle */}
  <meta name="twitter:creator" content="@huntermacias_" /> {/* Replace with your Twitter handle */}

  {/* LinkedIn does not use specific meta tags, it will utilize Open Graph tags */}

  {/* Additional meta tags */}
  <link rel="canonical" href="https://headshothub.vercel.app/" /> {/* Replace with your domain */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
</head>

      <body className="min-h-screen flex flex-col bg-[#121212] text-[#E0E0E0] font-inter">
        <section className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
        </section>
        <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </>
  );
}
