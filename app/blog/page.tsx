import ColoredPill from "../../components/element/coloredPill";
import Pill from "../../components/element/pill";
import { formatDate } from "../../lib/misc";
import { notion } from "../../lib/notion";
import { Block, Post } from "../../lib/notion/block.types";
import { PageType } from "../../lib/notion/page.types";

export const revalidate = 30; // revalidatyes every 30 seconds if someone requests the page. Not permanant, using this for testing

const getPosts = async () => {
  // const page = await notion.pages.retrieve({
  //   page_id: "b0893b0e3d15430290281e92f2b6d714",
  // });
  //@ts-expect-error Bad typings moment
  const { results }: { results: Block[] } = await notion.blocks.children.list({
    block_id: "53652e538ba146c8acfd0238168c513d",
  });
  // const page = await notion.blocks.
  //console.log(page);

  const posts: Post[] = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];

    if (result.has_children) {
      let type: "update" | "event" | "dev blog" | undefined = undefined;
      let desc = undefined;
      if (results[i + 1] && results[i + 1].has_children == false) {
        const two = results[i + 1].paragraph?.rich_text[0].plain_text;
        if (two?.toLowerCase() == "[update]") {
          type = "update";
        } else if (two?.toLowerCase() == "[event]") {
          type = "event";
        } else if (two?.toLowerCase() == "[dev blog]") {
          type = "dev blog";
        } else {
          desc = two;
        }
        if (
          desc == undefined &&
          results[i + 2] &&
          results[i + 2].has_children == false
        ) {
          desc = results[i + 2].paragraph?.rich_text[0].plain_text;
        }
      }
      //@ts-expect-error replace shit typing from notion api
      const page: PageType = await notion.pages.retrieve({
        page_id: result.id,
      });

      //console.log(page)

      posts.push({
        created: new Date(result.created_time),
        id: result.id,
        title: result.child_page.title,
        updated: new Date(result.last_edited_time),
        description: desc,
        coverImage: page.cover ? page.cover.external.url : undefined,
        type,
      });
    }
  }
  //posts[0].

  return posts;
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="title mb-8">Blogs</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {posts.map((post, i) => (
          <div key={i} className="group hover:border-opacity-20 transition duration-300 border border-white border-opacity-0  p-2 rounded-xl cursor-pointer">
            <div className="relative">
              {post.coverImage ? (
                <>
                  <img
                    src={post.coverImage}
                    className="w-full h-52 z-10 object-cover rounded-xl"
                  />

                  {/* <img
                    src={post.coverImage}
                    className=" blur-xl w-full h-44 object-cover rounded-xl"
                  /> */}
                </>
              ) : (
                <>
                  <div className="grow h-52  z-10 bg-gradient-to-br from-cyan-600 to-purple-500 rounded-xl"></div>
                  {/* <div className="grow h-44 blur-xl bg-gradient-to-br from-cyan-600 to-purple-500  rounded-xl"></div> */}
                </>
              )}
            </div>
            <h2 className="font-bold text-xl mt-4 mb-0.5">{post.title}</h2>
            <div className="flex items-center">
              {post.type && <GetPill type={post.type} />}
              <p className="text-xs text-gray-300">
                {formatDate(post.created)}
              </p>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-gray-200">
              {post.description || (
                <span className="italic text-gray-200">No description.</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function GetPill({ type }: { type: "update" | "event" | "dev blog" }) {
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

// {data.map((v, i) => (
//   <div key={i}>
//     {/* @ts-expect-error */}
//     <RenderBlock block={v} />
//   </div>
// ))}
