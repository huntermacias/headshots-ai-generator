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
      date: "January 28, 2024",
      rating: 5,
    },
    {
      username: "Bethany Hughes",
      jobTitle: "Graphic Designer",
      profilePicture: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandra-novak.71d19a1c.png&w=2048&q=75", // Replace with actual image path
      reviewImage: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandra-novak.71d19a1c.png&w=2048&q=75", // Replace with actual image path
      reviewText: "Stunning results and super fast delivery!",
      date: "February 4, 2024",
      rating: 5,


    },
    {
      username: "Charles Smith",
      jobTitle: "Software Developer",
      profilePicture: "https://www.realfakephotos.com/_next/image?url=%2Fimages%2Fusers%2Fyoung-man.png&w=256&q=75", // Replace with actual image path
      reviewImage: "https://www.realfakephotos.com/_next/image?url=%2Fimages%2Fusers%2Fyoung-man.png&w=256&q=75", // Replace with actual image path
      reviewText: "I was skeptical at first, but now I'm a believer. These AI-generated headshots are top-notch.",
      date: "February 3, 2024",
      rating: 4.8,


    },
    {
      username: "Sarah Marks",
      jobTitle: "@Sarah_Mark12",
      profilePicture: "https://kpstudios.com/wp-content/uploads/2022/02/linkedin-headshot_kp-studios26.jpg", // Replace with actual image path
      reviewImage: "https://kpstudios.com/wp-content/uploads/2022/02/linkedin-headshot_kp-studios26.jpg", // Replace with actual image path
      reviewText: "Professional headshots that align perfectly with my personal brand.",
      date: "February 2, 2024",
      rating: 5,


    },
    {
      username: "Jeremy Wright",
      jobTitle: "@JeremyRealOne",
      profilePicture: "https://snapheadshots.com/_ipx/f_webp/images/first-photo-1-1.png", // Replace with actual image path
      reviewImage: "https://snapheadshots.com/_ipx/f_webp/images/first-photo-1-1.png", // Replace with actual image path
      reviewText: "Incredible quality. I used my headshot for LinkedIn and got so many compliments!",
      date: "February 15, 2024",
      rating: 5,


    },
    // Add more review objects as needed
  ];


  return (
    <div className="flex flex-col items-center md:pt-16 bg-[#121212] text-[#E0E0E0] min-h-screen rounded-lg">
      <div className="flex flex-col items-center gap-10 p-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Professional AI Headshots in Minutes
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Elevate your online presence with HD headshots generated by our AI. Perfect for social profiles, resumes, and professional portfolios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-3 px-6 md:px-10 rounded-lg shadow transform hover:-translate-y-1 transition-all duration-300">
              Get Your Headshots

            </Link>
            <p className="text-sm text-gray-400 italic">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
          </div>
          <div className="text-gray-400 mt-4">
            <span>Already a member? </span>
            <Link href="/login"
              className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              Sign In

            </Link>
          </div>
        </div>
        <div className="w-full mt-12">
          <img
            src={hero.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full max-h-96 shadow-xl"
            style={{ filter: 'brightness(90%)' }} // Adjust image brightness for better visibility of text overlay if necessary
          />
        </div>
      </div>





      <div className="bg-black/80 mt-16 border-t border-b border-primary rounded-xl">

        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-black bg-opacity-80 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.profilePicture}
                    alt={review.username}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-600"
                  />
                  <div>
                    <h5 className="text-xl font-semibold text-white">{review.username}</h5>
                    <p className="text-sm text-gray-400">{review.jobTitle}</p>
                  </div>
                </div>
                <p className="text-md text-gray-300 leading-relaxed">{review.reviewText}</p>
                <div className="mt-4">
                  <img
                    src={review.reviewImage}
                    alt="User review"
                    className="rounded-lg object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 3a1 1 0 00-.9 1.555l1.95 3.9-4.2.612a1 1 0 00-.55 1.7l3.048 2.97-.72 4.19a1 1 0 001.45 1.05L10 15.51l3.75 1.97a1 1 0 001.45-1.05l-.72-4.19 3.048-2.97a1 1 0 00-.55-1.7l-4.2-.613 1.95-3.9A1 1 0 0010.951 3z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">Reviewed on {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="m-10 w-4/5 py-3 rounded-xl overflow-hidden shadow-lg border border-gray-800">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Trusted by Leading Professionals
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide p-4">
          <div className="logos-slide animate-slide flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex justify-center items-center p-4 min-w-[160px] hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ filter: "brightness(100%)" }}>
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={logo.width / 1.5}
                  height={logo.height / 1.5}
                  layout="intrinsic"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>






      <ExplainerSection />
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
        Discover Our Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(imageData.images).map(([key, urls], index) => (
          <GalleryCard
            key={index}
            title={`${key.replace('-', ' ').toUpperCase()} COLLECTION`}
            description={urls.description || "Explore this captivating collection."} // Fallback description if none provided
            numPhotos={urls.urls.length}
            timesSelected={`${Math.floor(Math.random() * (55 - 4 + 1) + 4)}`} // Random example
            imageUrls={urls.urls.slice(0, 2)} // Display only the first image as a teaser
            slug={`pack=${key}`}
          />
        ))}
      </div>
    </div>
      <PricingSection />

    </div>
  );
}
