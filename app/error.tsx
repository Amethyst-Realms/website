"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
