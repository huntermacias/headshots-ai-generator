'use client';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiCheckSquare } from 'react-icons/fi'; // Example icon, replace with appropriate ones


const calculateDiscountedPrice = (price: string, discountPercentage: number) => {
    const originalPrice = parseFloat(price.replace('$', ''));
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return `$${discountedPrice.toFixed(2)}`;
};


export const HoverEffect = ({
    items,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        price: string;
        features: string[];
        buttonText: string;
        bgColor: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-10">
            {items.map((item, idx) => (
                <Link key={item.link} href={item.link}

                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative group block p-2 h-full"
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 bg-pink-950/50 rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>
                    <Card item={item} />

                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    item,
}: {
    item: {
        title: string;
        price: string;
        description: string;
        features: string[];
        link: string;
        buttonText: string;
        bgColor: string;
    };
}) => {
    return (
        <div className={`flex flex-col justify-between rounded-2xl overflow-hidden relative z-20 h-full ${item.bgColor} shadow-lg`}>
        <div className="p-4  h-full rounded-lg">
          <div className="text-center">
            <h4 className="text-zinc-100 font-bold text-lg lg:text-xl">
              {item.title}
            </h4>
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="line-through text-red-600">{item.price}</span>
              <span className="text-green-400 text-xl lg:text-2xl">{calculateDiscountedPrice(item.price, 20)}</span>
            </div>
          </div>
          <p className="mt-4 text-zinc-400 text-sm lg:text-base">
            {item.description}
          </p>
          <ul className="mt-4 space-y-2">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-center text-zinc-300">
                <FiCheckSquare className="mr-2 text-purple-500 hover:text-purple-800" style={{ width: 24, height: 24 }} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      
        <div className="flex justify-center mt-4 mb-6">
          <Link href={item.link}
            className="inline-flex items-center justify-center bg-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-purple-800 transition-all duration-300 ease-in-out">
              {item.buttonText}
            
          </Link>
        </div>
      </div>
      
    );
};