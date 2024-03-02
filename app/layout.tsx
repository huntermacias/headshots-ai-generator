// Import statements remain unchanged
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import Head from "next/head";

export const dynamic = 'force-dynamic'

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: "Elite Portraits | AI-Driven Headshot Revolution",
  description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
  colorScheme: 'dark',
  creator: 'Headshot Hub',
  image: 'https://i.imgur.com/2GTz1vH.png',
  icons: {
    icon: 'https://i.imgur.com/2GTz1vH.png',
    shortcut: 'https://i.imgur.com/2GTz1vH.png', 
    apple: 'https://i.imgur.com/2GTz1vH.png', 
    other: {
      rel: 'elite-image',
      url: 'https://i.imgur.com/2GTz1vH.png',
    },
  },
  icon: 'https://img.freepik.com/premium-photo/flat-color-camera-logo-vector_946471-1626.jpg', 
  twitter: {
    card: 'summary_large_image',
    title: "Elite Portraits | AI-Driven Headshot Revolution",
    description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
    siteId: '1467726470533754880',
    creator: 'huntermacias_',
    creatorId: '1467726470533754880',
    images: ['https://i.imgur.com/2GTz1vH.png'],
  },
}


export default function RootLayout({ children }: any) {
  return (
    <>
      <Head>
        {/* Social media preview tags */}
        <title>Elite Portraits | AI-Driven Headshot Revolution</title>
        <meta name="description" content="Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders." />
        <meta property="og:title" content="Elite Portraits | AI-Driven Headshot Revolution" />
        <meta property="og:description" content="Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders." />
        <meta name="image" property="og:image" content="https://i.imgur.com/2GTz1vH.png" />
        <meta name="author" content="Hunter Macias" />
        <meta property="og:url" content="https://headshothub.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elite Headshots" />
        <meta name="twitter:card" content={metadata.twitter.description} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content='https://i.imgur.com/2GTz1vH.png' />
        <meta name="google-site-verification" content="Lp0KrHcd3_ppfo5PnwlqV2qALjCn1UDt15EXcg4Fc-w" />
      </Head>

      <body className="h-screen flex flex-col  text-white font-sans">
        <section className="w-full">
          <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
            <Navbar />
          </Suspense>
        </section>
        <main className="flex-grow container-fluid px-4 md:px-8 lg:px-16 ">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </>
  );
}
