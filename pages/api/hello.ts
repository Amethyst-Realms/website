// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connect, { Gun } from '../../lib/mongo'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connect()
    const r = await Gun.find()
    console.log(r)
  res.status(200).json({ name: 'John Doe' })
}
