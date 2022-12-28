// import "server-only";

import "./globals.css";
import Layout from "../components/layout";
import Image from "next/image";
import amethystLogo from "../public/logos/amethyst-with-gradient.png";
import CopyIP from "../components/home/copyIP";
import OnlinePlayers from "../components/home/onlinePlayer";
import RoveCard from "../components/home/rove";
import Pill from "../components/element/pill";
import { Suspense } from "react";
import LatestBlog from "../components/home/latestBlog";
import { LoadingPostPreview } from "../components/element/postPreview";
import Link from "next/link";

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
              priority={true}
              alt="Amethyst Realms Logo"
              width={3510}
              height={2106}
              className="2xl:max-w-[90rem] -translate-y-28 select-none"
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
      <section className="grow flex flex-col px-6">
        <h2 className="mx-auto font-bold text-5xl mt-8">Latest Posts</h2>
        <div className="max-w-4xl w-full mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <Suspense
            fallback={[...Array(3)].map((_, i) => (
              <LoadingPostPreview key={i} />
            ))}
          >
            {/* @ts-expect-error Server Component */}
            <LatestBlog />
          </Suspense>
        </div>
        <Link href="/blog" className="mx-auto px-4 py-2 bg-white hover:brightness-75 shadow-white/25 shadow-md transition duration-300 text-gray-900 font-semibold rounded-xl">See all posts</Link>
      </section>
      <section className="grow flex flex-col px-6 ">
        <h2 className="mx-auto font-bold text-5xl mt-16">Servers</h2>
        <div className="max-w-4xl w-full mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <div className=""></div>
          <Pill className="flex flex-col !rounded-md !py-6">
            <RoveCard />
          </Pill>
          <div className=" md:col-span-2 lg:col-span-1"></div>
        </div>
      </section>
      <div></div>
    </Layout>
  );
}
