import { AvatarIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: credits,
  } = await supabase.from("credits").select("*").eq("user_id", user?.id ?? '').single()

  return (
    <nav className="flex w-full px-8 lg:px-24 py-4 items-center border-b border-gray-500 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent text-white justify-between relative z-20">
    <Link href="/" passHref
      className="text-xl font-semibold tracking-wide hover:text-opacity-80 transition duration-200 ease-in-out">
        Headshots AI
    </Link>
    <div className="flex gap-6">
      {user ? (
        <>
          <Link href="/overview" passHref>
            <Button variant="outline" className="text-white border border-white hover:border-transparent hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white transition duration-200 ease-in-out">
              Home
            </Button>
          </Link>
          {stripeIsConfigured && (
            <Link href="/get-credits" passHref>
              <Button variant="outline" className="text-white border border-white hover:border-transparent hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white transition duration-200 ease-in-out">
                Get Credits
              </Button>
            </Link>
          )}
        </>
      ) : (
        <div className="space-x-4">
          <Link href="/gallery" passHref>
            <Button variant={'ghost'} className="bg-gradient-to-r from-cyan-500/50 to-blue-500/50 hover:from-cyan-600 hover:to-blue-600 text-white transition duration-200 ease-in-out">Gallery</Button>
          </Link>
          <Link href="/login" passHref>
            <Button variant={'ghost'} className="bg-gradient-to-r from-cyan-500/50 to-blue-500/50 hover:from-cyan-600 hover:to-blue-600 text-white transition duration-200 ease-in-out">Login / Signup</Button>
          </Link>
        </div>
      )}
    </div>
    {user && (
      <div className="flex items-center gap-4">
        {stripeIsConfigured && <ClientSideCredits creditsRow={credits ? credits : null} />}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none">
              <AvatarIcon className="h-8 w-8 text-gray-300 hover:text-gray-200" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-600 shadow-lg mt-2">
            <DropdownMenuLabel className="p-2 font-medium text-gray-300">{user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator className="border-t border-gray-600" />
            <form action="/auth/sign-out" method="post">
              <DropdownMenuItem asChild>
                <button type="submit" className="w-full text-left p-2 hover:bg-gray-700 text-gray-200">
                  Log out
                </button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )}
  </nav>
  
  );

}