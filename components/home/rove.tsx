import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import { ReactNode } from "react";
import Pill, { InnerPill } from "../element/pill";
import Image from "next/image";
import roveLogo from "../../public/logos/rove.png";
import roveBG from "../../public/banners/research.png";
import CTA from "../element/cta";

export default function RoveCard() {
  return (
    <div className="w-1/3 hover:w-1/2 transition-all relative group duration-300">
      <Image
        fill
        src={roveBG}
        alt="Image of rove"
        className="object-cover brightness-[0.3] group-hover:brightness-90 transition duration-300 z-0"
      />
      <div className="z-10 inset-0 absolute flex">
        <div className="flex flex-col my-auto mx-auto items-center">
          <Image
            src={roveLogo}
            alt="Logo for rove"
            width={200}
            className="max-w-xs group-hover:scale-125 transition duration-500 md:max-w-[auto]"
          />
          <div className="w-20  group-hover:w-full max-w-[12rem] mx-4 mt-2 group-hover:translate-y-2 mb-10 h-0.5 bg-white opacity-40 duration-500 group-hover:opacity-80"></div>
          <div className="flex flex-col items-center space-y-4">
            {features.map((feature, i) => (
              <Pill
                small
                key={i}
                dark
                className="group-hover:!bg-black/30 !pl-1 transition duration-500"
              >
                <InnerPill className="!ml-0 mr-2 !p-0.5">
                  {feature.icon}
                </InnerPill>
                {feature.name}
              </Pill>
            ))}
          </div>
          <CTA>Learn More</CTA>
        </div>
      </div>
    </div>
  );
}

export const features: { name: string; icon: ReactNode }[] = [
  {
    name: "Raiding enemy player bunkers",
    icon: <AcademicCapIcon className="h-4 w-4" />,
  },
  {
    name: "Custom zombies and weapons",
    icon: <AcademicCapIcon className="h-4 w-4" />,
  },
  {
    name: "Fast-paced looting system",
    icon: <AcademicCapIcon className="h-4 w-4" />,
  },
  {
    name: "Farming, Boss fights, and more",
    icon: <AcademicCapIcon className="h-4 w-4" />,
  },
];
