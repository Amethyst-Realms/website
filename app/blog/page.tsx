import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ExtendedRecordMap } from "notion-types";
import { ReactNode } from "react";
import { renderBlocks } from "../../components/notionPage";

import { notion } from "../../lib/notion";

const getData = async () => {
  // const page = await notion.pages.retrieve({
  //   page_id: "b0893b0e3d15430290281e92f2b6d714",
  // });
  const page = await notion.blocks.children.list({
    block_id: "b0893b0e3d15430290281e92f2b6d714",
  });
  // const page = await notion.blocks.
  //console.log(page);
  return page;
};

export default async function Page() {
  const data = await getData();

  return (
    <>
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
      {data.results.map((v, i) => (
        <div key={i}>
          {/* @ts-expect-error */}
          <RenderBlock block={v} />
        </div>
      ))}
    </>
  );
}

function RenderBlock({block}: {block: PartialBlockObjectResponse | BlockObjectResponse}): ReactNode | null {
  //@ts-expect-error
  if (block.type) {
  //@ts-expect-error
  return renderBlocks(block)
  }

  return null
}
