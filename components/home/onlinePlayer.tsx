import Pill, { InnerPill } from "../element/pill";

export const revalidate = 120

export default async function OnlinePlayers() {
  const data = await getData();

  return (
    <Pill className="!pr-1">
      Online Players
      <InnerPill className="min-w-[2rem]">
        {data.online ? data.players.online : "Offline"}
      </InnerPill>
    </Pill>
  );
}

async function getData() {
  const res = await fetch("https://api.mcsrvstat.us/2/minehut.com", {
    next: { revalidate: 120 }, // updates cache every 2 mins
  }); 

  if (!res.ok) {
    // activates nearest error boundry
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
