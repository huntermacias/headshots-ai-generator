// Import statements remain unchanged
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: "Elite Portraits | AI-Driven Headshot Revolution",
  description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
  colorScheme: 'dark',
  creator: 'Headshot Hub',
  image: 'https://headshothub.vercel.app/_next/static/media/hero2.da43727a.webp',
  icons: {
    icon: 'https://img.freepik.com/premium-photo/abstract-human-head-made-wooden-elements-3d-render-illustration_856795-13207.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais', // Replace with your icon link
    shortcut: 'https://img.freepik.com/premium-photo/abstract-human-head-made-wooden-elements-3d-render-illustration_856795-13207.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais', // Replace with your shortcut icon link
    apple: 'https://img.freepik.com/premium-photo/abstract-human-head-made-wooden-elements-3d-render-illustration_856795-13207.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais', // Replace with your Apple touch icon link
    other: {
      rel: 'elite-image',
      url: 'https://headshothub.vercel.app/_next/static/media/hero2.da43727a.webp',
    },
  },
  icon: 'https://img.freepik.com/premium-photo/abstract-human-head-made-wooden-elements-3d-render-illustration_856795-13207.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais', // Duplicate; consider if needed or adjust based on usage
  twitter: {
    card: 'summary_large_image',
    title: "Elite Portraits | AI-Driven Headshot Revolution",
    description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
    siteId: '1467726470533754880',
    creator: 'huntermacias_',
    creatorId: '1467726470533754880',
    images: ['https://headshothub.vercel.app/_next/static/media/hero2.da43727a.webp'],
  },
}


export default function RootLayout({ children }: any) {
  return (
    <>
      <head>
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.description} />
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
