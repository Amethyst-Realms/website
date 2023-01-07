import { notion } from "../../../lib/notion";
import { RenderBlock } from "../../../components/notionPage";
import { Fragment } from "react";
import Pill from "../../../components/element/pill";
import { TitleComponent } from "./title";
import { formatDate } from "../../../lib/misc";
import { Block } from "../../../lib/notion/block.types";
import {
  ListBlockChildrenResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { GetPill } from "../../../components/element/postPreview";

export const revalidate = 300; // revalidatyes every 5 mins if someone requests the page. Not permanant, using this for testing

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { post, postInfo, type } = await getPost(slug);
  //console.log(postInfo)
  /* @ts-expect-error Mistyped JSON*/
  const updatedDate = formatDate(new Date(postInfo.created_time));

  return (
    // <div>
    //   <pre>{JSON.stringify(postInfo, null, 2)}</pre>
    //   {/* @ts-expect-error Mistyped JSON*/}
    //   {postInfo.properties.title.title[0].plain_text}
    //   {/* @ts-expect-error Mistyped JSON*/}
    //   {postInfo.cover.external.url}

    // </div>

    <>
      <section>
        <div className="relative mb-16">
          {/* @ts-expect-error Mistyped JSON*/}
          {postInfo.cover ? (
            <>
              <img
                /* @ts-expect-error Mistyped JSON*/
                src={postInfo.cover[postInfo.cover.type].url}
                className="w-full h-64 absolute inset-0 z-10 object-cover rounded-2xl"
              />

              <img
                /* @ts-expect-error Mistyped JSON*/
                src={postInfo.cover[postInfo.cover.type].url}
                className=" blur-xl w-full h-64 object-cover"
              />
            </>
          ) : (
            <>
              <div className="grow h-64 absolute inset-0 z-10 bg-gradient-to-br from-cyan-600 to-purple-500 rounded-2xl"></div>
              <div className="grow h-64 blur-xl bg-gradient-to-br from-cyan-600 to-purple-500"></div>
            </>
          )}
        </div>
      </section>
      <TitleComponent>
        <>
          {/* @ts-expect-error Mistyped JSON*/}
          {postInfo.properties.title.title[0].plain_text}
        </>
      </TitleComponent>
      <section className="flex space-x-8 items-center -translate-y-6">
        <Pill className="inline-flex !text-sm text-gray-300">
          {updatedDate}
        </Pill>
        {type != null && <GetPill type={type} small={false} />}
      </section>
      <section>
        <div className="prose prose-invert max-w-4xl flex flex-col ">
          {post.results.map((postInfo, i) => (
            <Fragment key={i}>
              {/* @ts-expect-error */}
              <RenderBlock block={postInfo} />
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

const getPost = async (
  slug: string
): Promise<{
  post: ListBlockChildrenResponse;
  postInfo: GetPageResponse;
  type: "update" | "event" | "dev blog" | null;
}> => {
  const post = await notion.blocks.children.list({
    block_id: slug,
  });

  const postInfo = await notion.pages.retrieve({
    page_id: slug,
  });

  // @ts-expect-error
  const { results }: { results: Block[] } = await notion.blocks.children.list({
    block_id: "53652e538ba146c8acfd0238168c513d",
  });
  let type: "update" | "event" | "dev blog" | null = null;

  results.forEach((block, i) => {
    if (block.id == slug) {
      if (results[i + 1] && results[i + 1].has_children == false) {
        const two = results[i + 1].paragraph?.rich_text[0].plain_text;
        if (two?.toLowerCase() == "[update]") {
          type = "update";
        } else if (two?.toLowerCase() == "[event]") {
          type = "event";
        } else if (two?.toLowerCase() == "[dev blog]") {
          type = "dev blog";
        }
      }
    }
  });

  return {
    post,
    postInfo,
    type,
  };
};
