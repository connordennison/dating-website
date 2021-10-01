import { Deta } from 'deta'

const deta = Deta(process.env['DETA_PROJECT_KEY'])
const db = deta.Base("approved")

export default async function handler(req, res) {
  try {
    const dbContent = await db.fetch()
    res.status(200).json({success: true, ...dbContent})
  }
  catch (err) {
    res.status(501).json({success:false})
  }
}
