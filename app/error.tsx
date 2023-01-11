"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col font-mono">
      <div className="flex flex-col max-w-screen-md p-6 mx-auto w-full">
        <p className="mb-2 flex">{">"} 
        <p className="ml-3">{error.message}</p>
        </p>
        <p className="mb-10 flex">{">"} 
        <p className="ml-3">a possible cause of this error is visiting a blog that doesn't exist</p>
        </p>
        <Link href="/" className="mb-4 mx-auto px-3 py-1 bg-black text-white hover:bg-white hover:text-black transition hover:border-opacity-100 border-black border-opacity-0 border">
          Back to home
        </Link>{" "}
        <button
          onClick={() => reset()}
          className="px-3 py-1 bg-gray-200 mx-auto hover:bg-black hover:text-white transition hover:border-opacity-100 border-black border-opacity-0 border"
        >
          Reset error boundary
        </button>
      </div>
    </div>
  );
}
