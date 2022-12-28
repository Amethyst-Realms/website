import { Suspense } from "react";
import {
  LoadingPostPreview,
  PostPreview,
} from "../../components/element/postPreview";
import { getPosts } from "../../lib/notion/getPosts";

export const revalidate = 300; // revalidatyes every 30 seconds if someone requests the page. Not permanant, using this for testing

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="title mb- ml-2">Blogs</h1>
      <Suspense
        fallback={[...Array(4)].map((_, i) => (
          <LoadingPostPreview key={i} />
        ))}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <PostPreview post={post} key={i} />
          ))}
        </div>
      </Suspense>
    </>
  );
}
