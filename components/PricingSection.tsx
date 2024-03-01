import Link from "next/link";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/card-hover-effect";

export default function PricingSection() {


const pricingOptions = [
  {
    title: "Starter",
    price: "$16.25/month",
    description: "A launchpad for individuals ready to elevate their digital presence with professional flair.",
    link: '/get-credits',
    features: [
      "16 Tailored Headshots",
      "1 AI Training Model",
      "Round-the-clock Support"
    ],
    buttonText: "Select Starter",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31]/80 hover:border-pink-700 hover:shadow-lg hover:shadow-[#FF7597]/50",
  },
  {
    title: "Professional",
    price: "$37.50/month",
    link: '/get-credits',
    description: "Crafted for the ambitious professional, offering a dynamic range for every personal branding need.",
    features: [
      "48 Curated Headshots",
      "3 AI Training Models",
      "24/7 Expert Support",
      "Flexible Revision Credits"
    ],
    buttonText: "Opt for Professional",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-blue-700 hover:shadow-lg hover:shadow-[#4D9FEC]/50",
  },
  {
    title: "Premium",
    price: "$50/month",
    link: '/get-credits',
    description: "The pinnacle of personal branding, designed for those who seek the ultimate creative canvas.",
    features: [
      "80 Premium Headshots",
      "5 AI Training Models",
      "Priority 24/7 Support",
      "Generous Revision Credits",
      "Expedited Processing",
      "Elite Post-Edit Flexibility"
    ],
    buttonText: "Embrace Premium",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-green-700 hover:shadow-lg hover:shadow-[#34D399]/50",
  },
  {
    title: "Elite Enterprise",
    price: "$124.99/month",
    link: '/get-credits',
    description: "An unrivaled offering that combines extensive variety with elite exclusivity, tailored for visionary enterprises.",
    features: [
      "200+ Distinguished Headshots",
      "50 AI Training Models",
      "Dedicated 24/7 Support Line",
      "Unlimited Revision Credits",
      "Priority Project Processing",
      "In-depth Post-Edit Revisions"
    ],
    buttonText: "Go Elite",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-red-700 hover:shadow-lg hover:shadow-[#F87171]/50",
  },
];

  return (
    <div className="w-full py-10">
           <HoverEffect items={pricingOptions} />

    </div>
  );
}




