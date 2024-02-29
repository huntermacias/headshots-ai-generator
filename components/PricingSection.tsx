import Link from "next/link";
import { Button } from "./ui/button";

export default function PricingSection() {

  const calculateDiscountedPrice = (price: string, discountPercentage: number) => {
    const originalPrice = parseFloat(price.replace('$', ''));
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return `$${discountedPrice.toFixed(2)}`;
  };
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 mb-16 p-8 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 rounded-lg shadow-lg text-white space-y-8">
      <h2 className="text-4xl font-bold text-center mb-8 tracking-wider">
        Pricing - <span className="text-green-400">20% Off Sale!</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col ${option.bgColor} rounded-lg p-6 w-full md:w-1/3 lg:w-1/4 transform hover:scale-105 transition duration-300 ease-in-out shadow-2xl`}
          >
            {option.title === "Professional" && (
              <div className="text-white text-sm font-semibold py-1 px-3 bg-red-600 rounded-full w-fit mx-auto -mt-5 z-10 relative">
                Best Value!
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-center mb-2">
                {option.title}
              </h3>
              <p className="text-lg font-bold text-center mb-4">
                <span className="line-through opacity-50">{option.price}</span>
                <span className="text-green-400 ml-2">{calculateDiscountedPrice(option.price, 20)}</span>
              </p>
              <p className="text-center text-gray-400 mb-4">
                {option.description}
              </p>
              <ul className="space-y-2 pl-2">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 text-center">
              <Link href="/login" passHref>
                <Button className={`w-full ${option.title === "Basic" ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"} py-3 rounded-lg shadow-lg transition duration-300 ease-in-out`}>
                  {option.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const pricingOptions = [
  {
    title: "Starter",
    price: "$16.25/month",
    description: "A launchpad for individuals ready to elevate their digital presence with professional flair.",
    features: [
      "16 Tailored Headshots",
      "Single Model Portfolio",
      "Round-the-clock Support"
    ],
    buttonText: "Select Starter",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31]/80 hover:border-pink-700 hover:shadow-lg hover:shadow-[#FF7597]/50",
    icon: "star.svg", // Professional SVG icons recommended
  },
  {
    title: "Professional",
    price: "$37.50/month",
    description: "Crafted for the ambitious professional, offering a dynamic range for every personal branding need.",
    features: [
      "48 Curated Headshots",
      "Three Model Variants",
      "24/7 Expert Support",
      "Flexible Revision Credits"
    ],
    buttonText: "Opt for Professional",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-blue-700 hover:shadow-lg hover:shadow-[#4D9FEC]/50",
    icon: "briefcase.svg", // Professional SVG icons recommended
  },
  {
    title: "Premium",
    price: "$50/month",
    description: "The pinnacle of personal branding, designed for those who seek the ultimate creative canvas.",
    features: [
      "80 Premium Headshots",
      "Five Model Ensemble",
      "Priority 24/7 Support",
      "Generous Revision Credits",
      "Expedited Processing",
      "Comprehensive Post-Edit Flexibility"
    ],
    buttonText: "Embrace Premium",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-green-700 hover:shadow-lg hover:shadow-[#34D399]/50",
    icon: "crown.svg", // Professional SVG icons recommended
  },
  {
    title: "Elite Enterprise",
    price: "$124.99/month",
    description: "An unrivaled offering that combines extensive variety with elite exclusivity, tailored for visionary enterprises.",
    features: [
      "200+ Distinguished Headshots",
      "Comprehensive 50 Model Portfolio",
      "Dedicated 24/7 Support Line",
      "Unlimited Revision Credits",
      "Priority Project Processing",
      "In-depth Post-Edit Revisions"
    ],
    buttonText: "Go Elite",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-red-700 hover:shadow-lg hover:shadow-[#F87171]/50",
    icon: "elite.svg", // Professional SVG icons recommended
  },
];




