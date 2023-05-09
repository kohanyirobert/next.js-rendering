import getTime from "../../lib/getTime"

export default function handler(req, res) {
  res.json(getTime(req.query.timeZone))
}
