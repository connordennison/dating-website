import { Deta } from 'deta'

const deta = Deta(process.env['DETA_PROJECT_KEY'])
const db = deta.Base('approved')

export default function handler(req, res) {
  if (req.method != 'POST') return res.status(405).json({success: false})
  if (!req.body.name || !req.body.message) {
    return res.status(400).json({success: false})
  }
  let {name, email, message} = req.body
  message = message.substring(0,250)
  try {
    db.put({name, email, message})
    res.status(200).json({success: true})
  } catch (err) {
    console.error(err)
    res.status(500).json({success: false})
  }
}