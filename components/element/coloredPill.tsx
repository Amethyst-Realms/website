import { ReactNode } from "react";

export default function ColoredPill({ small, className, children }: { small?: boolean, className: string, children: ReactNode}) {
	return (
		<div className={`rounded-full ${small ? "px-2 py-0.5 text-xs" : "px-4 py-1 text-sm"} font-medium  border border-opacity-20 bg-opacity-10 ${className}`}>
			{children}
		</div>
	)
}