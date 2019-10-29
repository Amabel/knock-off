export function hourMinute(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, '0')
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

export function timeDiff(t1, t2) {
  const [t1h, t1m, t1s] = t1.split(':')
  const [t2h, t2m, t2s] = t2.split(':')
  const d1 = new Date(1970, 0, 1, t1h, t1m, t1s ? t1s : 0).getTime()
  const d2 = new Date(1970, 0, 1, t2h, t2m, t2s ? t2s : 0).getTime()
  const now = new Date()
  const diff = new Date(d2 - d1 + now.getTimezoneOffset() * 60 * 1000)

  return `${diff.getHours()}:${diff.getMinutes()}:${diff.getSeconds()}`
}

export function addUpTime(t1, t2) {
  const [t1h, t1m = 0, t1s = 0] = t1.split(':')
  const [t2h, t2m = 0, t2s = 0] = t2.split(':')
  const d1 = new Date(1970, 0, 1, t1h, t1m, t1s)
  d1.setHours(d1.getHours() + parseInt(t2h))
  d1.setMinutes(d1.getMinutes() + parseInt(t2m))
  d1.setSeconds(d1.getSeconds() + parseInt(t2s))

  return `${pad2Num(d1.getHours())}:${pad2Num(d1.getMinutes())}:${pad2Num(d1.getSeconds())}`
}

// NOTE: returns current date with the format like: 'YYYYMMDD'
export function getSimpleDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return year + pad2Num(month) + pad2Num(day)
}

function pad2Num(num) {
  return `0${num}`.slice(-2)
}
