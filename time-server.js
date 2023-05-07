import express from 'express'
import cors from 'cors'

const PORT = 5000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const date = new Date()
  const locale = req.query.locale ?? Intl.DateTimeFormat().resolvedOptions().locale
  const timeZone = req.query.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone
  const time = date.toLocaleTimeString(locale, {
    timeZone: timeZone
  })
  res.json({ time })
})

app.listen(PORT)
