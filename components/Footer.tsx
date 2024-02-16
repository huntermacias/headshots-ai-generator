import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-10 border-t border-[#2a2938] bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4">
        <div className="text-[#A0A0A0]">
          <span className="font-medium">Powered by </span>
          {/* <Link href="https://github.com/leap-ai/headshots-starter" target="_blank"
            className="text-[#4D9FEC] hover:text-[#76e0f7] transition-colors duration-300 font-bold">
            Open-source
          </Link>,  */}
          <Link href="https://tryleap.ai/" target="_blank"
            className="text-[#FA8C16] hover:text-[#FFA85D] transition-colors duration-300 font-bold">
             Leap AI
          </Link>, 
          <Link href="https://supabase.com/" target="_blank"
            className="text-[#9D7CFD] hover:text-[#B89BFF] transition-colors duration-300 font-bold"> Supabase
          </Link>, and
          {process.env.DEPLOYMENT_PROVIDER === "replit" ? (
            <Link href="https://replit.com/@leap-ai/Headshot-AI-Professional-Headshots-with-Leap-AI" target="_blank"
              className="text-[#E94560] hover:text-[#FF657F] transition-colors duration-300 font-bold"> Replit
            </Link>
          ) : (
            <Link href="https://vercel.com/" target="_blank"
              className="text-[#64FFDA] hover:text-[#8BFFEA] transition-colors duration-300 font-bold"> Vercel
            </Link>
          )}.
        </div>
        <div className="flex space-x-6">
          {/* Example SVG icons replaced for simplicity */}
          {/* Twitter */}
          <Link href="https://twitter.com/huntermacias_" aria-label="Twitter" target="_blank"
            className="hover:text-[#1DA1F2] transition-colors duration-300">
              {/* Insert Twitter SVG */}
              Twitter
            
          </Link>
          {/* GitHub */}
          <Link href="https://github.com/huntermacias" aria-label="GitHub" target="_blank"
            className="hover:text-[#6e5494] transition-colors duration-300">
              {/* Insert GitHub SVG */}
              GitHub
            
          </Link>
        </div>
      </div>
    </footer>
  );
}
