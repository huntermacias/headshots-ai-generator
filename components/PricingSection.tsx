import Link from "next/link";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 mb-16 p-8 bg-[#111111] rounded-lg space-y-8 border-t border-b border-[#2a2938]">
      <h2 className="text-4xl font-bold text-center text-[#EDEDED] mb-8">Pricing</h2>
      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col border-2 border-[#333333] rounded-lg p-6 w-full md:w-1/3 lg:w-1/4 ${option.bgColor} hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-semibold text-center text-[#EDEDED]">
                {option.title}
              </h3>
              <p className="text-xl font-bold text-center text-[#EDEDED] mb-2">
                {option.price}
              </p>
              <p className="text-sm text-gray-400 text-center">
                {option.description}
              </p>
              <ul className="space-y-2 mb-4 pl-4 text-white">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <span className="text-[#4CAF50]">✔</span> {/* Customized check color */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 text-center">
              <Link href="/login">
                
                  <Button className="w-3/4 bg-[#646FD4] hover:bg-[#5a62d4] text-white transition-colors duration-300">
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
    price: "1 Credit",
    description: "Perfect for individuals looking to enhance their online presence.",
    features: ["4 AI Headshots"],
    buttonText: "Choose Starter",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31]/80 hover:border-pink-700 hover:shadow-lg hover:shadow-[#FF7597]/50",
    icon: "🌟", // Example: Use a relevant icon or SVG
  },
  {
    title: "Basic",
    price: "3 Credits",
    description: "Ideal for professionals requiring frequent updates to their profiles.",
    features: ["12 AI Headshots"],
    buttonText: "Choose Basic",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-blue-700 hover:shadow-lg hover:shadow-[#4D9FEC]/50",
    icon: "💼", // Example: Use a relevant icon or SVG
  },
  {
    title: "Premium",
    price: "5 Credits",
    description: "The best value with unlimited possibilities.",
    features: ["20 AI Headshots"],
    buttonText: "Choose Premium",
    bgColor: "bg-[#0D0C1D] border-[#5D5D81] hover:bg-[#1D1C31] hover:border-green-700 hover:shadow-lg hover:shadow-[#34D399]/50",
    icon: "👑", // Example: Use a relevant icon or SVG
  },
];


