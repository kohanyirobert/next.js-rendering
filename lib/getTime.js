export default function getTime(inputTimeZone) {
  const date = new Date()
  const locale = Intl.DateTimeFormat().resolvedOptions().locale
  const timeZone = inputTimeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone
  const time = date.toLocaleTimeString(locale, { timeZone })
  return { time }
}
