import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import { ReactNode } from "react";
import Pill, { InnerPill } from "../element/pill";
import Image from "next/image";
import roveLogo from "../../public/logos/rove.png";

export default function RoveCard() {
  return (
    <>
      <Image src={roveLogo} alt="Logo for rove" width={200} className="max-w-xs md:max-w-[auto] mx-auto" />
      <div className="rounded-full w-20 mt-4 mx-auto mb-10 h-2 bg-gradient-to-br from-cyan-600 to-purple-500 opacity-40"></div>
      <div className="flex flex-col items-center space-y-4">
        {features.map((feature, i) => (
          <Pill className="!pl-1" small key={i}>
            <InnerPill className="!ml-0 mr-2 !p-0.5">{feature.icon}</InnerPill>
            {feature.name}
          </Pill>
        ))}
      </div>
    </>
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
