import connect, { Gun } from "../../lib/mongo";

export default async function Guns() {
	const data = await getData()
return (
	<div>
		guns
	</div>
)
}

async function getData() {
  try {
    await connect()
    const r = await Gun.find()
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    console.log(r)
    return r
  } catch (e) {
    console.error(e)
    return "error"
  }
}