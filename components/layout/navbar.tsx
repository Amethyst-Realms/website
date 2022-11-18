"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

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
		<nav className={styles.nav}>
			{pages.map((page, i) => (
				<Link href={page.route} key={i} className={page.matcher.test(pathname as string) ? styles.selected : undefined}>
				{page.name}
				</Link>
			))}
		</nav>
	)
}