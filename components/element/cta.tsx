import { ReactNode } from "react";

export default function CTA({ children, disabled }: { children: ReactNode, disabled?: boolean }) {
  return (
    <div className={`px-4 py-2 mt-8 hover:brightness-75  transition duration-300 font-semibold rounded-xl ${disabled ? "text-gray-700 bg-gray-300" : "bg-white text-gray-900"}`}>
      {children}
    </div>
  );
}
