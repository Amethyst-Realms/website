"use client";

import { ReactNode } from "react";

export default function Copy({
  toCopy,
  children,
}: {
  toCopy: string;
  children: ReactNode;
}) {
  return (
    <div
      onClick={() => navigator.clipboard.writeText(toCopy)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
