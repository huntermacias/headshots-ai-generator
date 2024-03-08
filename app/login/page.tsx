import { Button } from "@/components/ui/button";
import Messages from "./messages";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-neutral-700 to-gray-700">
      <div className="w-full max-w-md space-y-8 p-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-gray-100/10">
        <h2 className="text-center text-4xl font-bold text-white">Log In / Sign Up</h2>
        <p className="mt-2 text-center text-md text-gray-200">
          Log into your account or sign up to get started.
        </p>
        <form className="mt-8 space-y-6" action="/auth/sign-in" method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-950/50 text-gray-900 bg-white/20 backdrop-blur-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="cr.leadbird@gmail.com"
                required
              />
            </div>
          </div>
  
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue
            </Button>
            <Messages /> 
          </div>
        </form>
        <div className="mt-6 text-center text-md text-gray-200">
          By signing up, you agree to our
          <Link href="#" className="ml-1 underline text-white hover:text-blue-300"> Terms of Service </Link>
          and
          <Link href="#" className="ml-1 underline text-white hover:text-blue-300"> Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
}
