import Link from "next/link";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <footer className="bg-white/10 px-8 py-4 mx-6 items-center rounded-xl font-normal  text-gray-200 border-white/20 border  mb-6 mt-20 flex flex-col md:flex-row justify-between">
        <div className="md:flex items-end">
          <h3 className="font-medium">Amethyst Realms </h3>
          <p className="ml-4 text-xs text-gray-300 pb-0.5">Made in the USA</p>
        </div>
        <section className="space-x-4 mt-4 md:mt-0 text-sm flex flex-row items-center justify-center">
          <FooterButton>
            <Link href="/privacy-policy">Privacy</Link>
          </FooterButton>
          <FooterButton>
            <a href="https://discord.gg/eBrNgY3YFW" rel="noopener noreferrer">
              Discord
            </a>
          </FooterButton>
          <FooterButton>
            <a
              href="https://github.com/Amethyst-Realms/website"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </FooterButton>
        </section>
      </footer>
    </div>
  );
}

function FooterButton({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg py-0.5 cursor-pointer px-2 bg-white/10 md:bg-transparent transition duration-300 md:hover:bg-white/10">
      {children}
    </div>
  );
}
