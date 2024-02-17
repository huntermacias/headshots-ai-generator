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
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="w-full max-w-md space-y-8"
        action="/auth/sign-in"
        method="post"
      >
        <Card className="overflow-hidden shadow-md">
          <CardHeader>
            <CardTitle>Log In / Sign Up</CardTitle>
            <CardDescription>
              Log into your account or sign up to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
            <Button className="w-full">Continue</Button>
            <Messages />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center">
              By signing up, you agree to our
              <a href="#" className="mx-1 underline hover:text-indigo-500">
                Terms of Service
              </a>
              and
              <a href="#" className="mx-1 underline hover:text-indigo-500">
                Privacy Policy
              </a>.
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
