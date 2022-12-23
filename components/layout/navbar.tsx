import Image from "next/image";
import Link from "next/link";
import amethystLogo from "../../public/logos/amythyst-small.png"
import Pill from "../element/pill";
import NavBlur from "./navbarBlur";
//import { usePathname } from "next/navigation";

export default function Navbar({fixed}: {fixed?: boolean}) {
	//const pathname = usePathname();

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
		<nav className={`w-full pb-1 ${fixed ? "fixed" : "sticky"} top-0 z-30`}>
			<NavBlur />
			<div className="h-16 max-w-4xl mx-auto flex items-center justify-between border-b-2 border-neutral-300/10 px-6 z-10">
				<div className="flex items-center">
					<Image
					width={100}
					height={100}
					src={amethystLogo}
					alt="Logo for amethyst realms"
					className="h-8 w-8 rounded-full"
					/>
					<h1 className="ml-4 font-medium text-lg">Amethyst</h1>
				</div>
				<div>
middle
				</div>
				<div>
					<Pill small={true}>
						Apply
					</Pill>
				</div>
			</div>
			
		</nav>
	)
}