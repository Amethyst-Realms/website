import { notion } from "../../../lib/notion";
import { RenderBlock } from "../../../components/notionPage";
import { Fragment } from "react";
import Layout from "../../../components/layout";
import Pill from "../../../components/element/pill";

export const revalidate = 30; // revalidatyes every 30 seconds if someone requests the page. Not permanant, using this for testing

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { post, postInfo } = await getPost(slug);
	/* @ts-expect-error Mistyped JSON*/
	const updatedDate = new Date(postInfo.last_edited_time)
	const updatedDateFormatted = `${updatedDate.getMonth()} / ${updatedDate.getDate()} / ${updatedDate.getFullYear()}`

  return (
    // <div>
    //   <pre>{JSON.stringify(postInfo, null, 2)}</pre>
    //   {/* @ts-expect-error Mistyped JSON*/}
    //   {postInfo.properties.title.title[0].plain_text}
    //   {/* @ts-expect-error Mistyped JSON*/}
    //   {postInfo.cover.external.url}
    
    // </div> 
    <Layout>
			
      <div className="mx-auto flex flex-col max-w-4xl py-16 w-full px-6">
        <section>
          {/* @ts-expect-error Mistyped JSON*/}
          {postInfo.cover && (
            <div className="relative mb-16">
              <img
                /* @ts-expect-error Mistyped JSON*/
                src={postInfo.cover.external.url}
                className="w-full h-64 absolute inset-0 z-10 object-cover rounded-2xl"
              />

              <img
                /* @ts-expect-error Mistyped JSON*/
                src={postInfo.cover.external.url}
                className=" blur-xl w-full h-64 object-cover rounded-2xl"
              />
            </div>
          )}
          <h1 className="text-5xl tracking-wide leading-[4.5rem] font-extrabold">
            {/* @ts-expect-error Mistyped JSON*/}
            {postInfo.properties.title.title[0].plain_text}
          </h1>
					
					
					<Pill className="inline-flex  !text-sm text-gray-300">Updated {updatedDateFormatted}</Pill>
					
        </section>
        <section>
          <div className="prose prose-invert max-w-screen-md flex flex-col">
            {post.results.map((postInfo, i) => (
              <Fragment key={i}>
                {/* @ts-expect-error */}
                <RenderBlock block={postInfo} />
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

const getPost = async (slug: string) => {
  const post = await notion.blocks.children.list({
    block_id: slug,
  });

  const postInfo = await notion.pages.retrieve({
    page_id: slug,
  });

  return {
    post,
    postInfo,
  };
};
