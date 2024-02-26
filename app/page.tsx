import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero from "/public/hero2.webp";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";
import GalleryCard from "@/components/galleryCard";
import { imageData } from "@/lib/galleryData";

export const dynamic = "force-dynamic";

const logos = [
  { src: '/fortune500-logos/001.png', width: 128, height: 64 },
  { src: '/fortune500-logos/002.png', width: 128, height: 64 },
  { src: '/fortune500-logos/003.png', width: 128, height: 64 },
  { src: '/fortune500-logos/012.png', width: 128, height: 64 },
  { src: '/fortune500-logos/016.png', width: 128, height: 64 },
  { src: '/fortune500-logos/028.png', width: 128, height: 64 },
  { src: '/fortune500-logos/032.png', width: 128, height: 64 },
  { src: '/fortune500-logos/033.png', width: 128, height: 64 },
  { src: '/fortune500-logos/052.png', width: 128, height: 64 },
  { src: '/fortune500-logos/081.png', width: 128, height: 64 },
  { src: '/fortune500-logos/083.png', width: 128, height: 64 },
  { src: '/fortune500-logos/193.png', width: 128, height: 64 },
  { src: '/fortune500-logos/443.png', width: 128, height: 64 },

  { src: '/fortune500-logos/014.png', width: 128, height: 64 },
  { src: '/fortune500-logos/187.png', width: 128, height: 64 },
  { src: '/fortune500-logos/264.png', width: 128, height: 64 },
  { src: '/fortune500-logos/267.png', width: 128, height: 64 },
  { src: '/fortune500-logos/286.png', width: 128, height: 64 },
  { src: '/fortune500-logos/314.png', width: 128, height: 64 },

  // Add more logos here
];


export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  const reviews = [
    {
      username: "Alexis Rodriguez",
      jobTitle: "Marketing Specialist",
      profilePicture: "https://snapheadshots.com/_ipx/f_webp/images/solution-result-5.png", // Replace with actual image path
      reviewImage: "https://snapheadshots.com/_ipx/f_webp/images/solution-result-5.png", // Replace with actual image path
      reviewText: "The AI headshots were beyond my expectations. Definitely recommended!",
    },
    {
      username: "Bethany Hughes",
      jobTitle: "Graphic Designer",
      profilePicture: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandra-novak.71d19a1c.png&w=2048&q=75", // Replace with actual image path
      reviewImage: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandra-novak.71d19a1c.png&w=2048&q=75", // Replace with actual image path
      reviewText: "Stunning results and super fast delivery!",
    },
    {
      username: "Charles Smith",
      jobTitle: "Software Developer",
      profilePicture: "https://www.realfakephotos.com/_next/image?url=%2Fimages%2Fusers%2Fyoung-man.png&w=256&q=75", // Replace with actual image path
      reviewImage: "https://www.realfakephotos.com/_next/image?url=%2Fimages%2Fusers%2Fyoung-man.png&w=256&q=75", // Replace with actual image path
      reviewText: "I was skeptical at first, but now I'm a believer. These AI-generated headshots are top-notch.",
    },
    {
      username: "Sarah Marks",
      jobTitle: "@Sarah_Mark12",
      profilePicture: "https://kpstudios.com/wp-content/uploads/2022/02/linkedin-headshot_kp-studios26.jpg", // Replace with actual image path
      reviewImage: "https://kpstudios.com/wp-content/uploads/2022/02/linkedin-headshot_kp-studios26.jpg", // Replace with actual image path
      reviewText: "Professional headshots that align perfectly with my personal brand.",
    },
    {
      username: "Jeremy Wright",
      jobTitle: "@JeremyRealOne",
      profilePicture: "https://snapheadshots.com/_ipx/f_webp/images/first-photo-1-1.png", // Replace with actual image path
      reviewImage: "https://snapheadshots.com/_ipx/f_webp/images/first-photo-1-1.png", // Replace with actual image path
      reviewText: "Incredible quality. I used my headshot for LinkedIn and got so many compliments!",
    },
    // Add more review objects as needed
  ];


  return (
    <div className="flex flex-col items-center md:pt-16 bg-[#121212] text-[#E0E0E0] min-h-screen">
      <div className="flex flex-col items-center gap-8 p-4 max-w-7xl w-full">
        <div className="text-center space-y-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#76e0f7] to-[#d783ff]">
            Professional AI Headshots in minutes.
          </h1>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Elevate your online presence with HD headshots generated by our AI. Ideal for social profiles, resumes, and professional portfolios.
          </p>
          <div className="space-y-4 w-full">
            <Link href="/login">
              <Button className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#764ba2] hover:to-[#667eea] transition-colors duration-300 ease-in-out transform hover:-translate-y-1">
                Get Your Headshots
              </Button>
            </Link>
            <p className="text-xs sm:text-sm text-[#A0A0A0] italic">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
          </div>
          <div className="text-[#A0A0A0]">
            <span>Already a member? </span>
            <Link href="/login" className="text-[#76e0f7] hover:text-[#d783ff] transition-colors duration-300 ease-in-out">
              Sign In
            </Link>
          </div>
        </div>
        <div className="w-full mt-8">
          <img
            src={hero.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full shadow-lg"
          />
        </div>
      </div>




      <div className="bg-[#191919] py-16 border-t border-b border-primary rounded-xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          What People Are Saying
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Array of review objects */}
          {reviews.map((review, index) => (
            <div key={index} className="bg-gradient-to-r from-black/70 to-[#171717] backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <img
                  src={review.profilePicture}
                  alt={review.username}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h5 className="text-xl font-semibold text-white">{review.username}</h5>
                  <p className="text-sm text-gray-400">{review.jobTitle}</p>
                </div>
              </div>
              <p className="text-md text-gray-300 mt-4">{review.reviewText}</p>
              <img
                src={review.reviewImage}
                alt="User review"
                className="mt-4 rounded-lg object-cover shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full bg-gradient-to-r from-black/70 to-[#171717] py-6 rounded-xl mb-4 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">Trusted by Leading Professionals</h2>
        <div className="logos overflow-x-auto whitespace-nowrap">
          <div className="logos-slide animate-slide flex flex-row items-center justify-center gap-x-12 md:gap-x-16 lg:gap-x-20 2xl:gap-x-28">
            {logos.map((logo, index) => (
              <div key={index} className="inline-flex drop-shadow-lg lg:drop-shadow-2xl min-w-[128px]"> {/* Adjust the min-width to match your desired logo width */}
                <Image src={logo.src} alt={`Logo ${index + 1}`} width={logo.width} height={logo.height} layout="intrinsic" />
              </div>
            ))}
          </div>
        </div>
      </div>





      <ExplainerSection />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(imageData.images).map(([key, urls], index) => (
        <GalleryCard
          key={index}
          title={`${key.replace('-', ' ').toUpperCase()} SETS`}
          description={`Description for ${key}`}
          numPhotos={urls.length}
          timesSelected={`${Math.floor(Math.random() * (55 - 4 + 1) + 4)}`} // Example usage, replace with actual data
          imageUrls={urls}
          slug={`pack=${key}`}
        />
      ))}
    </div>
      <PricingSection />

    </div>
  );
}
