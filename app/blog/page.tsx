import { notion } from "../../lib/notion";
import { Block, Post } from "../../lib/notion/block.types";
import { PageType } from "../../lib/notion/page.types";

export const revalidate = 30; // revalidatyes every 30 seconds if someone requests the page. Not permanant, using this for testing

const getData = async () => {
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
      let desc = undefined;
      if (results[i + 1] && results[i + 1].has_children == false) {
        desc = results[i + 1].paragraph?.rich_text[0].plain_text;
      }
//@ts-expect-error replace shit typing from notion api
      const page: PageType = await notion.pages.retrieve({
        page_id: result.id
      })

      //console.log(page)

      posts.push({
        created: new Date(result.created_time),
        id: result.id,
        idNoDash: result.id.replaceAll("-", ""),
        title: result.child_page.title,
        updated: new Date(result.last_edited_time),
        description: desc,
        coverImage: page.cover ? page.cover.external.url : undefined
      });
    }
  }

  return { results, posts };
};

export default async function Page() {
  const data = await getData();

  return (
    <>
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="prose"></div>
    </>
  );
}

// {data.map((v, i) => (
//   <div key={i}>
//     {/* @ts-expect-error */}
//     <RenderBlock block={v} />
//   </div>
// ))}
