import type { ReactNode } from "react";

export default function Pill({
  dark,
  className,
  small,
  children,
  hover,
  disabled,
}: {
  dark?: boolean;
  className?: string;
  small?: boolean;
  children: ReactNode;
  hover?: boolean;
  disabled?: boolean;
}) {
  return (
    <div
      aria-disabled={disabled}
      className={`rounded-full select-none backdrop-blur ${
        hover && "cursor-pointer transition duration-300 hover:bg-white/20"
      } ${
        !small ? "py-1 px-4" : "py-1 px-3 text-sm"
      } border-white/25 border font-medium flex items-center ${
        !dark ? "bg-white/10" : "bg-black/10"
      } 
			${disabled && (!dark ? "!bg-white/10" : "!bg-black/10") + " text-gray-400"}
			${className}`}
    >
      {children}
    </div>
  );
}

export function InnerPill({
  className,
  children,
  left,
}: {
  className?: string;
  children: ReactNode;
  left?: boolean;
}) {
  return (
    <div
      className={`rounded-full px-2 bg-white/10 ${
        left ? "mr-4" : "ml-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
