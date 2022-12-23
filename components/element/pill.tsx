import type { ReactNode } from "react";

export default function Pill({dark, className, small, children, hover}: {dark?: boolean, className?: string, small?: boolean, children: ReactNode, hover?: boolean}) {

	return (
		<div className={`rounded-full ${hover && "cursor-pointer transition duration-300 hover:bg-white/20"} ${!small ? "py-1 px-4" : "py-1 px-3 text-sm"} border-white/25 border font-medium flex items-center ${!dark ? "bg-white/10" : "bg-black/10"} ${className}`}>
			{children}
		</div>
	)
}

export function InnerPill({className, children}: {className?: string, children: ReactNode}) {
	return (
		<div className={`rounded-full px-2 bg-white/10 ml-4 ${className}`}>
			{children}
		</div>
	)
}