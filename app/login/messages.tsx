"use client";

import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  return (
    <>
       {error && (
      <div className="p-4 my-4 rounded-lg shadow-md bg-red-100 border border-red-400 text-red-700 text-center">
        <h3 className="font-semibold">Oops! Something went wrong.</h3>
        <p>{error}</p>
      </div>
    )}
    {message && (
      <div className="p-4 my-4 rounded-lg shadow-md bg-green-100 border border-green-400 text-green-700 text-center">
        <h3 className="font-semibold">Success!</h3>
        <p>{message}</p>
      </div>
    )}
    </>
  );
}
