import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "../../components/notionPage";
import { notion } from "../../lib/notion";

const getData = async () => {
  // const page = await notion.pages.retrieve({
  //   page_id: "b0893b0e3d15430290281e92f2b6d714",
  // });
	const page = await notion.blocks.children.list({
		block_id: "b0893b0e3d15430290281e92f2b6d714"
	})
  console.log(page);
  return page;
};

export default async function Page() {
  const data = await getData();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
