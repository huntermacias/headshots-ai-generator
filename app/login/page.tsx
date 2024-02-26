import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-lg bg-gradient-to-r from-gray-950 to-indigo-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 brightness-125 opacity-80 bg-black bg-opacity-80 p-6 rounded-xl shadow-2xl border border-gray-700">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Log In / Sign Up</h2>
        <p className="mt-2 text-center text-sm text-gray-400">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
          </div>
  
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </Button>
            <Messages />
          </div>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          By signing up, you agree to our
          <a href="#" className="underline text-white hover:text-indigo-500"> Terms of Service </a>
          and
          <a href="#" className="underline text-white hover:text-indigo-500"> Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
  
}
