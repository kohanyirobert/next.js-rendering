export default function displayTime(data, error, isLoading) {
  console.log('Running displayTime', data, error, isLoading)
  if (data) {
    return data.time
  } else if (isLoading) {
    return '??:??'
  }
  return JSON.stringify(error)
}
