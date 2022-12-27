import type {
  ListBlockChildrenResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse,
  ParagraphBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ReactNode } from "react";
import { PencilSquareIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Pill from "./element/pill";


export function RenderBlock({
  block,
}: {
  block: PartialBlockObjectResponse | BlockObjectResponse;
}): ReactNode | null {
  //@ts-expect-error
  if (block.type) {
    return (
      <>
        {/* @ts-expect-error */}
        {renderBlocks(block)}
      </>
    );
  }

  return null;
}

export const Text = ({ text }: { text: any[] }) => {
  if (!text) {
    return null;
  }
  return (
    <>
      {text.map((value, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        return (
          <span
            key={index}
            className={[
              bold ? "font-bold" : null,
              italic ? "italic" : null,
              code
                ? "rounded-md bg-white-10 py-1 px-2 font-mono text-sm tracking-wider"
                : null,
              strikethrough ? "line-through" : null,
              underline ? "underline" : null,
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <a className="link" href={text.link.url}>
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export const renderBlocks = (block: BlockObjectResponse): ReactNode => {
  const { type, id } = block;
  //@ts-expect-error Type annoyance
  const value = block[type];
  if (!value) return null;

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="tracking-wide">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="!mt-12 tracking-wide" >
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="!mt-8 tracking-wide">
          <Text text={value.rich_text} />
        </h3>
      );
    case "numbered_list_item":
      return (
        <li className="list-decimal">
          <Text text={value.rich_text} />
        </li>
      );
    case "bulleted_list_item":
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label className="to-do flex items-center gap-2" htmlFor={id}>
            <input
              type="checkbox"
              className="rounded-md  text-white-300 checked:ring-white-300  hover:ring hover:ring-white-600 focus:outline-0 focus:ring-0 active:ring-0"
              id={id}
              aria-describedby={value.rich_text}
              defaultChecked={value.checked}
            />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image": {
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <div className="mx-auto">
          <img
            src={src}
            alt={caption}
            loading="lazy"
            className={` h-full max-h-[30rem] w-full object-cover rounded-xl ${caption && "!mb-2"}`}
          />
          {caption && (
            <figcaption className="text-sm italic ml-2">
              {caption}
            </figcaption>
          )}
        </div>
      );
    }
    case "divider":
      return <div className="h-0.5 grow my-6 mx-1 rounded-full bg-white/10 " />;
    case "quote":
      let warn = false;
      let displayText: string;
      if ((value.rich_text[0].plain_text as string).startsWith("Warn: ")) {
        displayText = (value.rich_text[0].plain_text as string).replace("Warn: ", "");
        warn = true;
      } else {
        displayText = value.rich_text[0].plain_text
      }
      return (
        <div
          className={`rounded-xl border p-4 my-4 flex text-gray-100 ${warn ? "bg-yellow-500/5 border-yellow-500 shadow-md shadow-yellow-500/10": "bg-white/5 border-white/25"}`}
          key={id}
        >
          <div className=" mr-4">
            {warn ? <ExclamationTriangleIcon className="h-6 w-6" /> : <PencilSquareIcon className="h-6 w-6" />}
          </div>
          {displayText}
        </div>
      );
    case "callout":
      return (
        <div className="flex items-center gap-3 rounded-md bg-white-10 px-4 py-4">
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.rich_text} />
          </div>
        </div>
      );
    case "code":
      return (
        <div>
          <Pill className=" inline-flex text-gray-300 text-sm font-medium">
            {value.language}
          </Pill>
          <pre className="!mt-2 overflow-auto whitespace-pre p-6 leading-8 bg-gray-900">
            <code className="flex flex-wrap font-mono " key={id}>
              {value.rich_text[0].plain_text}
            </code>
          </pre>
        </div>
      );
    case "video":
      return (
        <>
          {value.external.url}
          <div className="relative mx-auto h-full w-full overflow-hidden pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 mx-auto h-full w-full rounded-xl"
              src={
                (value.external.url as string).startsWith(
                  "https://www.youtube.com"
                ) && !(value.external.url as string).includes("embed")
                  ? (value.external.url as string).replace("watch?v=", "embed/")
                  : value.external.url
              }
              referrerPolicy="no-referrer"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        </>
      );
    case "embed":
      return (
        <div className="relative mx-auto h-full w-full overflow-hidden pb-[56.25%] aspect-video">
          <iframe
            className="absolute top-0 left-0 mx-auto h-full w-full rounded-md md:rounded-xl "
            src={value.url}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="embed"
          />
        </div>
      );
    case "pdf":
      return (
        <div className="relative mx-auto h-full w-full overflow-hidden pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 mx-auto h-full w-full rounded-md md:rounded-xl"
            src={value.file.url}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="embed"
          />
        </div>
      );
    case "table":
      return <div>coming soon:tm:</div>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
