import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Pill, { InnerPill } from "../../../components/element/pill";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/blog" className="mr-auto">
        <Pill small className="!pl-1 mb-10" hover>
          <InnerPill className="py-0.5" left>
            <ChevronLeftIcon className="w-4 h-4" />
          </InnerPill>
          All Blogs
        </Pill>
      </Link>
      {children}
    </>
  );
}
