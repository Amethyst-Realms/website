import "server-only";

import "./globals.css";
import Layout from "../components/layout";
import Image from "next/image";
import amethystLogo from "../public/logos/amethyst-with-gradient.png";
import CopyIP from "../components/home/copyIP";
import OnlinePlayers from "../components/home/onlinePlayer";

export default function Home() {
  const gradient1 = {
    background: `linear-gradient(180deg, rgba(0,0,0, 0.95) 0%, rgba(0,0,0,0.95) 100%), radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.8) 100%
    ), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 95%, rgba(0,0,0,1) 100%)
    `,
  };
  //radial-gradient(circle, rgba(28,4,47,0.2) 0%,  rgba(0,0,0,0) 20%),

  return (
    <Layout fixed={true}>
      <div className="h-screen [background-image:url('/misc/amethyst-block-darked.jpg')] [background-size:3.5rem] ">
        <div
          className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center"
          style={gradient1}
        >
          <div className="relative ">
            <Image
              src={amethystLogo}
              alt="Amethyst Realms Logo"
              width={3510}
              height={2106}
              className="h-screen w-auto -translate-y-28 select-none"
            />
            <div className="absolute inset-0 grid place-items-center ">
              <div className="translate-y-32 flex space-x-8">
                {/* @ts-expect-error Server Component */}
                <OnlinePlayers />
                <CopyIP />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[200rem]">test</div>
      <div></div>
    </Layout>
  );
}
