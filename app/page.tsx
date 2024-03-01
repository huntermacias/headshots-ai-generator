

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero from "/public/hero2.webp";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";
import { imageData } from "@/lib/galleryData";

import { Testimonials } from "@/components/Testimonials";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/moving-border";
import { HeaderText } from "@/components/HeaderText";

export const dynamic = "force-dynamic";

const logos = [
  { src: '/fortune500-logos/001.png', width: 128, height: 64 },
  { src: '/fortune500-logos/016.png', width: 128, height: 64 },
  { src: '/fortune500-logos/028.png', width: 128, height: 64 },
  { src: '/fortune500-logos/032.png', width: 128, height: 64 },
  { src: '/fortune500-logos/033.png', width: 128, height: 64 },
  { src: '/fortune500-logos/081.png', width: 128, height: 64 },
  { src: '/fortune500-logos/083.png', width: 128, height: 64 },
  { src: '/fortune500-logos/443.png', width: 128, height: 64 },
  { src: '/fortune500-logos/187.png', width: 128, height: 64 },
  { src: '/fortune500-logos/264.png', width: 128, height: 64 },
  { src: '/fortune500-logos/267.png', width: 128, height: 64 },
  { src: '/fortune500-logos/286.png', width: 128, height: 64 },

  // Add more logos here
];

const allUrls = Object.values(imageData.images).flatMap(imagePack => imagePack.urls);
const shuffledUrls = allUrls.sort(() => 0.5 - Math.random());
let selectedUrls = shuffledUrls.slice(0, 38);


export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }







  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-50 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-7xl mx-auto p-6 relative z-20">

        <section className="text-center py-16 relative">

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 px-4">
              Professional AI Headshots in Minutes
            </h1>
            <HeaderText />



            <Link href="/login">

              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 md:px-6 lg:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Get Your Headshots
              </Button>


            </Link>

            <p className="text-gray-400 italic mt-4">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
            <Link href="/login"
              className="text-blue-400 hover:text-blue-500 transition-colors mt-2">
              Already a member? Sign In

            </Link>
          </div>
        </section>
        {/* Premium Headshot Collections */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Premium Headshot Collections
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {selectedUrls.map((imageUrl, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  width={768}
                  height={1152}
                  className="transform hover:scale-110 transition duration-300 ease-out"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Trusted by Leading Professionals */}
        <section className="my-16 py-8 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Trusted by Leading Professionals
          </h2>
          <div className="flex justify-center gap-4 overflow-x-auto p-4">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={logo.width}
                height={logo.height}
                className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            ))}
          </div>
        </section>

        {/* Explainer & Pricing */}
        <ExplainerSection />
        <PricingSection />
      </div>
    </div>
  );

}
