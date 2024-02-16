// Import statements remain unchanged
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Headshots AI",
  description: "Generate awesome headshots in minutes using AI",
};

export default function RootLayout({ children }:any) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Include any additional meta tags, fonts, or CSS links here */}
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
