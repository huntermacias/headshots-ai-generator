// Ensure you have Tailwind CSS installed and configured in your Next.js project
import Link from 'next/link';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-90">
      <div className="backdrop-blur-md px-10 py-8 md:px-20 md:py-16 rounded-lg border border-gray-800 shadow-2xl">
        <div className="text-center text-white">
          <p className="text-2xl md:text-5xl font-bold mb-4 tracking-wide">404</p>
          <p className="text-xl md:text-3xl font-semibold mb-5">Lost in Space</p>
          <p className="mb-8 text-md md:text-lg font-light text-gray-400">
            The page you're looking for seems to be on another planet. Let's get you back home.
          </p>
          <Link href="/"
            className="inline-block px-7 py-3 text-sm md:text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              Return Home
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
