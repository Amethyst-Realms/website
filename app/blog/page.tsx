import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ExtendedRecordMap } from "notion-types";
import { ReactNode } from "react";
import { RenderBlock } from "../../components/notionPage";


import { notion } from "../../lib/notion";

export const revalidate = 30; // revalidatyes every 30 seconds if someone requests the page. Not permanant, using this for testing


const getData = async () => {
  // const page = await notion.pages.retrieve({
  //   page_id: "b0893b0e3d15430290281e92f2b6d714",
  // });
  const page = await notion.blocks.children.list({
    block_id: "53652e538ba146c8acfd0238168c513d",
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="prose">
       
      {data.results.map((v, i) => (
        <div key={i}>
          {/* @ts-expect-error */}
          <RenderBlock block={v} />
        </div>
      ))}
      </div>
    </>
  );
}

