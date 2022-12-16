"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	const pages: {name: string, route: string, matcher: RegExp}[] = [
		{
			name: "Home",
			route: "/",
			matcher: /^\/$/g
		},
		{
			name: "Monuments",
			route: "/monuments",
			matcher: /^\/monuments/g
		},
		{
			name: "Guns",
			route: "/guns",
			matcher: /^\/guns/g
		}
	]

	return (
		<nav className="">
			
		</nav>
	)
}