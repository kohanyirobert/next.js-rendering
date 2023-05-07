export function getTimeServerUrl(timeZone) {
  const url = 'http://localhost:5000'
  if (timeZone) {
    return `${url}?timeZone=${timeZone}`
  }
  return url
}
