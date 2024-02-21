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
    <div className="w-full max-w-6xl mx-auto mt-16 mb-16 p-8 bg-gradient-to-r from-black/70 to-[#171717] rounded-lg space-y-8 border-t border-b border-[#2a2938]">
      <h2 className="text-4xl font-bold text-center text-[#EDEDED] mb-8">Pricing - 20% Off Sale!</h2>
      <div className="flex flex-wrap justify-center gap-8 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col ${option.title === "Basic" ? "bg-gradient-to-r from-black/70 to-[#171717] border-2 border-[#5a62d4]" : "border-2 border-opacity-50 border-gray-700"} rounded-lg p-6 w-full md:w-1/3 lg:w-1/4 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out shadow-md ${option.bgColor}`}
          >
            {option.title === "Basic" && (
              <div className="text-white text-sm font-semibold py-1 px-3 bg-red-500 rounded-full w-fit mx-auto -mt-5 shadow-lg animate-bounce">
                Best Value!
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-center text-[#EDEDED]">
                {option.title}
              </h3>
              <div className="text-xl font-bold text-center text-[#EDEDED] mb-2">
                <span className="line-through">{option.price}</span>
                <span className="text-red-500 ml-2">{calculateDiscountedPrice(option.price, 20)}</span>
              </div>
              <p className="text-xs text-mute d-foreground text-center">
                {option.description}
              </p>
              <ul className="space-y-2 mb-4 pl-2 text-white text-sm mt-2">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-[#4CAF50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 text-center">
              <Link href="/login">
                <Button className={`w-3/4 ${option.title === "Basic" ? "bg-[#5a62d4] hover:bg-[#4f56ca]" : "bg-[#646FD4] hover:bg-[#5a62d4]"} text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 ease-in-out`}>
                  {option.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pricingOptions = [
  {
    title: "Starter",
    price: "$16.25",
    description: "Perfect for individuals aiming to boost their online image.",
    features: [
      "16 Professional Headshots",
      "1 Model Included",
      "24/7 Support"
    ],
    buttonText: "Choose Starter",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31]/80 hover:border-pink-700 hover:shadow-lg hover:shadow-[#FF7597]/50",
    icon: "🌟", // Suggestion: Replace with an SVG for a more professional appearance
  },
  {
    title: "Basic",
    price: "$37.50",
    description: "Ideal for professionals seeking regular profile refreshes.",
    features: [
      "48 Professional Headshots",
      "3 Models Included",
      "24/7 Support",
      "Revision Credits"
    ],
    buttonText: "Choose Basic",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-blue-700 hover:shadow-lg hover:shadow-[#4D9FEC]/50",
    icon: "💼", // Suggestion: Replace with an SVG for a more professional appearance
  },
  {
    title: "Premium",
    price: "$50",
    description: "Our best offer, designed for unlimited creative exploration.",
    features: [
      "80 Professional Headshots",
      "5 Models Included",
      "24/7 Support",
      "Revision Credits",
      "Priority Processing",
      "Post-Edit Revisions"
    ],
    buttonText: "Choose Premium",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-green-700 hover:shadow-lg hover:shadow-[#34D399]/50",
    icon: "👑", // Suggestion: Replace with an SVG for a more professional appearance
  },
];



