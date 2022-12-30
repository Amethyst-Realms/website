import { Block, Post } from "./block.types";
import { PageType } from "./page.types";
import { notion } from "../notion";

export const getPosts = async () => {
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

  //loop through api results and turn them into useable data
  for (let i = 0; i < results.length; i++) {
    const result = results[i];

    if (result.has_children) {
      let type: "update" | "event" | "dev blog" | undefined = undefined;
      let desc = undefined;
      //figure out what type of label it is
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
      //add cleaned up data to posts array
      posts.push({
        created: new Date(result.created_time),
        id: result.id,
        title: result.child_page.title,
        updated: new Date(result.last_edited_time),
        description: desc,
        //@ts-expect-error
        coverImage: page.cover ? page.cover[page.cover.type].url : undefined,
        type,
      });
    }
  }

  //sorts posts by date
  posts.sort((a, b) => {
    return b.created.getTime() - a.created.getTime();
  });
  //posts[0].
  //console.log(posts)

  return posts;
};
