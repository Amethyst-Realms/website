import Link from "next/link";
import { Post } from "../../lib/notion/block.types";
import ColoredPill from "./coloredPill";
import { formatDate } from "../../lib/misc";

export function PostPreview({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group hover:border-opacity-20 transition duration-300 border border-white border-opacity-0 p-2 rounded-xl cursor-pointer"
    >
      <div className="relative">
        {post.coverImage ? (
          <>
            <img
              src={post.coverImage}
              className="w-full h-52 z-10 object-cover rounded-xl"
            />
          </>
        ) : (
          <>
            <div className="grow h-52  z-10 bg-gradient-to-br from-cyan-600 to-purple-500 rounded-xl"></div>
          </>
        )}
      </div>
      <h2 className="font-bold text-xl mt-4 mb-0.5 line-clamp-2">
        {post.title}
      </h2>
      <div className="flex items-center">
        {post.type && <GetPill type={post.type} />}
        <p className="text-xs text-gray-300">{formatDate(post.created)}</p>
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-gray-200">
        {post.description || (
          <span className="italic text-gray-200">No description.</span>
        )}
      </p>
    </Link>
  );
}

export function LoadingPostPreview() {
  return (
    <div className="group animate-pulse  p-2 rounded-xl cursor-pointer">
      <div className="relative">
        <div className="grow h-52  z-10 bg-neutral-900  rounded-xl"></div>
      </div>
      <div className="rounded-md bg-neutral-900 h-8 mt-4 w-full"></div>
      <div className="rounded-full bg-neutral-900 h-6 mt-2 w-24 "></div>
      <div className="rounded-md bg-neutral-900 h-5 mt-4 w-full "></div>
      <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
      <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
    </div>
  );
}

export function GetPill({ type }: { type: "update" | "event" | "dev blog" }) {
  let classes;

  switch (type) {
    case "update":
      classes = "bg-yellow-600 border-yellow-600 text-yellow-600";
      break;
    case "event":
      classes = "bg-violet-500 border-violet-500 text-violet-500";
      break;
    case "dev blog":
      classes = "bg-cyan-600 border-cyan-600 text-cyan-600";
      break;
  }

  return (
    <ColoredPill small className={`mr-2 capitalize ${classes}`}>
      {type}
    </ColoredPill>
  );
}
