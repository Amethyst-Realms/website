import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getPosts } from "../../lib/notion/getPosts";
import Pill, { InnerPill } from "../element/pill";
import { PostPreview } from "../element/postPreview";

export const revalidate = 300;

export default async function LatestBlog() {
  //gets the first of the array of most recent posts
  const latestPosts = (await getPosts()).slice(0, 3);

  return (
    <>
      {latestPosts.map((post, i) => (
        <PostPreview post={post} key={i} />
      ))}
    </>
  );
}

export async function LatestPostPreview() {
  const latestPost = (await getPosts())[0];
  return (
    <Pill className="!pl-1 mb-6 text-xs" small>
      <InnerPill left className="!mr-2">
        Latest Post
      </InnerPill>
      <span className="max-w-xs truncate "><span className="font-normal">{latestPost.title}</span></span> 
      {/* <InnerPill>
        <ArrowRightIcon className="h-5 w-3" />
      </InnerPill> */}
    </Pill>
  )
}