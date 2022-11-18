import clientPromise from "../../lib/mongo"

export default async function Guns() {
	const data = await getData()
return (
	<div>
		guns {data}
	</div>
)
}

async function getData() {
  try {
    const client = await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return "true"
  } catch (e) {
    console.error(e)
    return "false"
  }
}