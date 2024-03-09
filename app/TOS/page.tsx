import React from 'react';
import Link from 'next/link';

type Props = {}

const termsOfServiceSections = [
    {
        title: "Introduction",
        content: "Welcome to HeadshotAI! These Terms of Service ('Terms') govern your access to and use of the HeadshotAI website ('Site') and the services provided by OrionsWay, doing business as HeadshotAI ('I', 'me', or 'my'). Please read these Terms carefully before accessing or using the Site or services."
    },
    {
        title: "Acceptance of Terms",
        content: "By accessing or using our Site or services, you agree to be bound by these Terms, along with our Privacy Policy. If you do not agree with these Terms or our Privacy Policy, you must not access or use our Site or services."
    },
    {
        title: "User Eligibility",
        content: "Our Site and services are designed to be accessible to users who are at least 13 years of age. By accessing or using our Site or services, you represent and warrant that you are at least 13 years old and possess the legal capacity to enter into a binding contract. If you do not meet this age requirement or lack legal capacity, please refrain from using our Site or services."
    },
    {
        title: "Account Registration and Security",
        content: "To access certain features of our services, account creation on our Site may be necessary. It's imperative that you provide accurate and complete information during registration and keep your account details up-to-date. You are solely responsible for maintaining the confidentiality of your account information and for all activities under your account. Promptly notify us at cr.leadbird@gmail.com if you detect any unauthorized use of your account or other security breaches."
    },
    {
        title: "Services and Pricing",
        content: "HeadshotAI is a web-based Software as a Service (SaaS) that enables users to transform their submitted photos into professional AI-generated headshots. Users can opt for various photo packages or subscriptions at predetermined prices. For specific details about photo packages, prices, and submission guidelines, please visit our Site."
    },
    {
        title: "User Content and Guidelines",
        content: "When using our services, you may submit photos and other content ('User Content') to us. You retain ownership of your User Content. However, by submitting it, you grant us a non-exclusive, royalty-free, global, perpetual license to use, reproduce, modify, adapt, publish, distribute, and display your User Content solely for providing and enhancing our services. Ensure that you own or have the necessary rights to submit the User Content and that it adheres to our submission guidelines.",
    },
    {
        title: "AI-generated Photos and Intellectual Property",
        content: "All AI-generated photos are the creative output of proprietary algorithms developed by me. These photos remain my exclusive property. Upon generation, you are granted a non-exclusive, royalty-free, global license to use the AI-generated photos for personal, non-commercial purposes. Any commercial use of the AI-generated photos requires my explicit prior written consent."
    },
    {
        title: "AI-generated Photo Guidelines",
        content: `For optimal results, please adhere to the following guidelines when submitting photos for AI generation:

        -Upload clear, high-quality photos, ideally close-up shots.
        -Ensure photos feature only one person.
        -Provide a variety of photos in different settings and poses.
        -Do ∏not upload repetitive or poor-quality photos.
        -Your face and hair should be fully visible and unobscured.`
    },
    {
        title: "Copyrights and Ownership", 
        content: "The content, features, and functionality of the Site and services, including text, graphics, logos, and software, are owned by me or my licensors and are protected under U.S. copyright and other intellectual property laws. You agree not to infringe upon my rights or those of my licensors."
    }, 
    {
        title: "Acceptable Use Policy", 
        content: "You commit to using our Site and services for lawful purposes and in compliance with these Terms. Prohibited actions include, but are not limited to, harmful conduct towards our Site, services, or users; engaging in fraudulent or illegal activities; unauthorized access; and using automated tools for data collection."
    }, 
    {
        title: "Refund and Cancellation Policy", 
        content: "If you are dissatisfied with our service, please contact us at cr.leadbird@gmail.com. Our team will review your case, and we are committed to working with you to find a satisfactory resolution. Refunds will be considered on a case-by-case basis, prioritizing customer satisfaction and service improvement."
    },
    {
        title: "Payment and Subscription Terms",
        content: "When you choose a photo package or subscription plan and provide payment details, you agree to the associated fees. Payments are processed via third-party processors, subject to their terms and conditions. We reserve the right to modify our pricing, plans, features, and payment terms at any time.",
    }
];

export const dynamic = "force-dynamic";


const TermsOfService = () => {
    const renderContent = (content: string) => {
        const lines = content.split('\n');
        const isList = lines.some(line => line.trim().startsWith('-'));

        if (!isList) {
            // Render paragraphs with enhanced styling for better readability
            return <p className="text-lg text-gray-300 mb-4">{content}</p>;
        } else {
            // Improved list rendering for clarity and visual appeal
            return (
                <ul className="list-disc list-inside space-y-2">
                    {lines.map((line, index) => (
                        line.trim().startsWith('-') && <li key={index} className="text-lg text-gray-300">{line.trim().substring(1).trim()}</li>
                    ))}
                </ul>
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Terms of Service</h1>
                <p className="text-md text-gray-400 text-center mb-8">
                    Last updated: 02/24/2024
                </p>
                {termsOfServiceSections.map((section, index) => (
                    <article key={index} className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                        {renderContent(section.content)}
                    </article>
                ))}
                <div className="text-center">
                    <Link href="/"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Return Home
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService