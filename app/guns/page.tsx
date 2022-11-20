import { Suspense } from "react";
import connect, { Gun } from "../../lib/mongo";
import Loading from "./loading";

export default async function Guns() {
  const data = await getData();
  if (!data) {
    return <div>error</div>;
  }
  return (
    <div>
      <Suspense>
      guns
      {data.map((v, i) => (
        <div key={i}>{v.ammo}</div>
      ))}
      </Suspense>
    </div>
  );
}

async function getData() {
  try {
    await connect();
    const r = await Gun.find({});
    return r;
  } catch (e) {
    //console.error(e)
    return false;
  }
}
