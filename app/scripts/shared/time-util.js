export function hourMinute(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0')
  const minutes = (totalMinutes % 60).toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export function minutes(hourMinutes) {
  if (!hourMinutes.match(/\d+:\d+/)) {
    return NaN
  }

  const hour = parseInt(hourMinutes.split(':')[0])
  const minute = parseInt(hourMinutes.split(':')[1])

  return minute > 59 ? NaN : hour * 60 + minute
}
