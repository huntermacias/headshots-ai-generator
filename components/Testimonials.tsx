import Image from 'next/image';
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";


type Props = {}

const reviews = [
    // update info to resemble asian man in san franciscos english

    {
        username: "Jun Wei Huang",
        jobTitle: "Tech Entrepreneur",
        profilePicture: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1706661078-f9f6faa78c19af36b612a4938da3869e-6.jpg", // Replace with actual image path
        reviewImage: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1706661078-f9f6faa78c19af36b612a4938da3869e-6.jpg", // Replace with actual image path
        reviewText: "Absolutely impressed by the precision of these AI headshots. Perfect blend of technology and artistry, ideal for my startup's digital presence.",
        date: "January 28, 2024",
        rating: 5,
    },
    {
        username: "Simone Clarke",
        jobTitle: "Creative Director",
        profilePicture: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705986865-08d2cee25ab76fab9e1ef3c2a629213b-12.jpg", // Replace with actual image path
        reviewImage: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705986865-08d2cee25ab76fab9e1ef3c2a629213b-12.jpg", // Replace with actual image path
        reviewText: "Absolutely amazed by the artistic quality and speed of delivery! These headshots perfectly capture the essence of my creative vision.",
        date: "February 4, 2024",
        rating: 5,


    },
        // update info to resemble a black man in brooklyn english
    {
        username: "Darius Johnson",
        jobTitle: "App Developer",
        profilePicture: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705988339-3095199821dc7f43c6a175483cb645ec-3.jpg", // Replace with actual image path
        reviewImage: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705988339-3095199821dc7f43c6a175483cb645ec-3.jpg", // Replace with actual image path
        reviewText: "Honestly, I was on the fence about AI art, but these headshots? Game-changer. The detail is unreal, perfectly capturing my style.",
        date: "February 3, 2024",
        rating: 4.8,


    },
    {
        // update info to resemble asian woman in san franciscos english
        username: "Lina Kim",
        jobTitle: "Brand Strategist",
        profilePicture: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1706661114-6ace0ed476eb32dd8e5f7c36b5af1949-2.jpg", // Replace with actual image path
        reviewImage: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1706661114-6ace0ed476eb32dd8e5f7c36b5af1949-2.jpg", // Replace with actual image path
        reviewText: "The headshots captured my essence with incredible accuracy. They're not just photos; they're a strategic extension of my brand's narrative.",
        date: "February 2, 2024",
        rating: 5,


    },
        // update info to resemble an english UK mans english

    {
        username: "Jeremy Wright",
        jobTitle: "Digital Marketing Consultant",
        profilePicture: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705992876-9b4a4d4518e298ba28b8cc19e08b054a-1.jpg", // Replace with actual image path
        reviewImage: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=768,height=1152,quality=75/https://r2-us-west.photoai.com/1705992876-9b4a4d4518e298ba28b8cc19e08b054a-1.jpg", // Replace with actual image path
        reviewText: "Truly exceptional quality; these AI headshots have elevated my professional profile. They've been a talking point in every Zoom call!",
        date: "February 15, 2024",
        rating: 5,


    },
    // Add more review objects as needed
];

export const Testimonials = (props: Props) => {
    return (
        <div className=" py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1DA1F2] mb-8">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#070a0c] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex items-start space-x-3">
                  <img src={review.profilePicture} alt={review.username} className="w-10 h-10 rounded-full object-cover border-2 border-[#1DA1F2]" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-md font-semibold text-white">{review.username}</h5>
                      <FaXTwitter className="text-[#e5dddd]" size={20} />
                    </div>
                    <p className="text-xs text-gray-400">{review.jobTitle}</p>
                    <p className="text-sm text-gray-300 mt-3">{review.reviewText}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Image src={review.reviewImage} alt="Review snapshot" className="rounded-md object-cover shadow-md scale:50 w-full"
                    width={500} height={300}
                  />
                </div>
                <div className="flex justify-between items-center mt-3 text-gray-400">
                  <div className="flex items-center space-x-3">
                    {/* Verified Customer Badge */}
                    <div className="flex items-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-white ml-1">Verified Customer</span>
                    </div>
                  </div>
                  <span className="text-xs">Reviewed on {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
};