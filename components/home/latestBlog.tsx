import { getPosts } from "../../lib/notion/getPosts";
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
