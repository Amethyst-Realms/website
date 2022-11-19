import connect, { Gun } from "../../lib/mongo";
import Loading from "./loading";

export default async function Guns() {
  const data = await getData();
  if (!data) {
    return <div>error</div>;
  }
  return (
    <div>
      <Loading />
      guns
      {data.map((v, i) => (
        <div key={i}>{v.ammo}</div>
      ))}
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
