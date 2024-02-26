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
    <nav className="flex w-full text-sm px-6 lg:px-20 py-3 border-b border-gray-600 items-center justify-between bg-black/30 shadow-md">
      <Link href="/" passHref
        className="text-lg font-bold text-blue-500 hover:text-blue-600/70 transition duration-300 ease-in-out">
          Headshot Hub | AI Portraits
        
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/overview" passHref
              className="text-teal-500 bg-transparent hover:bg-teal-100 py-2 px-4 rounded-full transition ease-in-out duration-300">
                Dashboard
              
            </Link>
            {stripeIsConfigured && (
              <Link href="/get-credits" passHref
                className="text-teal-500 bg-transparent hover:bg-teal-100 py-2 px-4 rounded-full transition ease-in-out duration-300">
                  Get Credits
                
              </Link>
            )}
          </>
        ) : (
          <>
            <Link href="/gallery" passHref
              className="text-blue-500 hover:bg-teal-500/30 py-1 px-2 rounded-md transition ease-in-out duration-300">
                Gallery
              
            </Link>
            <Link href="/login" passHref
              className="text-blue-500 hover:bg-teal-500/30 py-1 px-2 rounded-md transition ease-in-out duration-300">
                Login / Signup
              
            </Link>
          </>
        )}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <AvatarIcon className="h-8 w-8 text-teal-500 hover:text-teal-600" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl mt-2">
              <DropdownMenuLabel className="p-2 font-medium text-gray-700">{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator className="border-t border-gray-200" />
              <form action="/auth/sign-out" method="post">
                <DropdownMenuItem asChild>
                  <button type="submit" className="w-full text-left p-2 hover:bg-teal-50 text-gray-700">
                    Log out
                  </button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );

}
