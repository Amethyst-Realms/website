import { ReactNode } from "react";

export default function CTA({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-2 mt-8 bg-white hover:brightness-75  transition duration-300 text-gray-900 font-semibold rounded-xl">
      {children}
    </div>
  );
}
