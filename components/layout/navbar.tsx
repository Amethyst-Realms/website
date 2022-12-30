import Image from "next/image";
import Link from "next/link";
import amethystLogo from "../../public/logos/amythyst-small.png";
import Pill from "../element/pill";
import NavBlur from "./navbarBlur";
//import { usePathname } from "next/navigation";

export default function Navbar({ fixed }: { fixed?: boolean }) {
  //const pathname = usePathname();

  const pages: { name: string; route: string; matcher: RegExp }[] = [
    {
      name: "Home",
      route: "/",
      matcher: /^\/$/g,
    },
    {
      name: "Monuments",
      route: "/monuments",
      matcher: /^\/monuments/g,
    },
    {
      name: "Guns",
      route: "/guns",
      matcher: /^\/guns/g,
    },
  ];

  return (
    <nav className={`w-full pb-1 ${fixed ? "fixed" : "sticky"} top-0 z-30`}>
      <NavBlur />
      <div className="h-16 max-w-4xl mx-auto flex items-center justify-between border-b-2 border-neutral-300/10 px-6 z-10 relative">
        <Link href="/" className="flex items-center select-none z-40">
          <Image
            width={100}
            height={100}
            src={amethystLogo}
            alt="Logo for amethyst realms"
            className="h-8 w-8 rounded-full"
            placeholder="blur"
          />
          <h1 className="ml-4 font-medium text-lg">Amethyst</h1>
        </Link>
        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            className="rounded-full  relative group transition-all duration-300 hover:scale-105 cursor-pointer px-2.5 font-medium"
            href="/servers/rove"
          >
            <div className=" from-cyan-600 inset-0 rounded-full -z-10 opacity-20 transition duration-500 group-hover:opacity-100 absolute to-purple-500 bg-gradient-to-br "></div>
            Rove
          </Link>
        </div>
        <a
          rel="noreferrer noopener"
          href="https://forms.gle/gZ496XLE238fZERs6"
          target="_blank"
          className="z-40"
        >
          <Pill hover small={true}>
            Apply
          </Pill>
        </a>
      </div>
    </nav>
  );
}
