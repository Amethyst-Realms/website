import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({
  route,
  children,
  fixed
}: {
  route?: string;
  children: ReactNode;
  fixed?: boolean
}) {
  return (
    <div className="min-h-screen bg-black text-gray-50 flex flex-col font-normal">
			<Navbar fixed={fixed} />
      <div className="grow flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
