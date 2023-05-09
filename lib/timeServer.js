export function getTimeServerUrl(timeZone) {
  const url = '/api/time'
  if (timeZone) {
    return `${url}?timeZone=${timeZone}`
  }
  return url
}
