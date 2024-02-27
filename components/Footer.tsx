import Link from 'next/link';

export default function Footer() {
  const categories = [
    "naughty-christmas", "naughty-halloween", "old-money",
    "ai-yearbook", "y2k-aesthetic", "gorpcore", "tinder",
    "instagram", "avatar-ai", "boudoir", "headshots",
    "nightlife", "glamour", "ai-selfies", "street-style", "keynote-speaker",
    "nature", "travel", "outdoor-adventure", "polaroid", "fitness", "music-festival",
    "fitness-influencer", "virtual-try-on-clothes", "virtual-suits-try-on",
    "swimsuit", "latex", "hot-latina", "cyberpunk-boudoir", "spiritual", "pink-fever",
    "wedding", "birthday", "traditional-clothes", "graduation", "cosplay"
  ];


  return (
      <footer className="w-full py-12 mt-12 border-t border-gray-700 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
          <div className="space-y-4 col-span-1 lg:col-span-2">
            <img src="https://img.freepik.com/premium-photo/caucasian-photographer-holding-canon-capturing-illuminated-night-scene-generated-by-ai_24640-87690.jpg" alt="Logo" className="w-32 h-auto mb-4" />
            <p className="text-gray-400">Empowering creativity through AI, one headshot at a time.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://twitter.com/huntermacias_" className="hover:text-[#1DA1F2] transition-colors duration-300">Twitter</Link>
              <Link href="https://github.com/huntermacias" className="hover:text-[#6e5494] transition-colors duration-300">GitHub</Link>
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-gray-400 font-semibold">Explore</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.slice(0, 10).map((category, index) => (
                <Link key={index} href={`/category?pack=${category}`} className="text-gray-300 hover:text-white transition-colors duration-300 capitalize">{category.replace(/-/g, ' ')} </Link>
              ))}
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-gray-400 font-semibold">Powered By</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="https://tryleap.ai/" className="text-[#FA8C16] hover:text-[#FFA85D] transition-colors duration-300 font-bold">Leap AI </Link>
              <Link href="https://supabase.com/" className="text-[#9D7CFD] hover:text-[#B89BFF] transition-colors duration-300 font-bold">Supabase </Link>
              {/* Conditional rendering based on deployment provider */}
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-gray-400 font-semibold">Stay Updated</h3>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-gray-500" />
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
  
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Headshot AI | Elite Portraits. All rights reserved.
        </div>
      </footer>
    );
}
