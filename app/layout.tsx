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
  image: 'https://www.unite.ai/wp-content/uploads/2023/09/Alex_Mc_business_headshots._diverse_group_of_8_people._hyper-re_6afd794c-60bb-46d7-b8fd-3681e6cb36ef.jpg',
  icons: {
    icon: 'https://img.freepik.com/premium-photo/flat-color-camera-logo-vector_946471-1626.jpg', // Replace with your icon link
    shortcut: 'https://img.freepik.com/premium-photo/flat-color-camera-logo-vector_946471-1626.jpg', // Replace with your shortcut icon link
    apple: 'https://img.freepik.com/premium-photo/flat-color-camera-logo-vector_946471-1626.jpg', // Replace with your Apple touch icon link
    other: {
      rel: 'elite-image',
      url: 'https://www.unite.ai/wp-content/uploads/2023/09/Alex_Mc_business_headshots._diverse_group_of_8_people._hyper-re_6afd794c-60bb-46d7-b8fd-3681e6cb36ef.jpg',
    },
  },
  icon: 'https://img.freepik.com/premium-photo/flat-color-camera-logo-vector_946471-1626.jpg', // Duplicate; consider if needed or adjust based on usage
  twitter: {
    card: 'summary_large_image',
    title: "Elite Portraits | AI-Driven Headshot Revolution",
    description: "Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders.",
    siteId: '1467726470533754880',
    creator: 'huntermacias_',
    creatorId: '1467726470533754880',
    images: ['https://www.unite.ai/wp-content/uploads/2023/09/Alex_Mc_business_headshots._diverse_group_of_8_people._hyper-re_6afd794c-60bb-46d7-b8fd-3681e6cb36ef.jpg'],
  },
}


export default function RootLayout({ children }: any) {
  return (
    <>
      <head>
         {/* Add these tags for social media previews */}
        <meta property="og:title" content="Elite Portraits | AI-Driven Headshot Revolution" />
        <meta property="og:description" content="Craft your professional legacy with Elite Portraits. Leveraging advanced AI, we transform your digital presence with stunning headshots in mere moments—trusted by Fortune 500 leaders." />
        <meta name="image" property="og:image" content="https://www.unite.ai/wp-content/uploads/2023/09/Alex_Mc_business_headshots._diverse_group_of_8_people._hyper-re_6afd794c-60bb-46d7-b8fd-3681e6cb36ef.jpg" />
        <meta name="author" content="Hunter Macias"></meta>
        <meta property="og:url" content="https://headshothub.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elite Headshots" />

        <meta name="twitter:card" content={metadata.twitter.description} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
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
