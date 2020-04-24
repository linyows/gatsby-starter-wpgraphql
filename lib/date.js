const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"]

const dateF = (dateStr) => {
  const d = new Date(dateStr)
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const timeF = (dateStr) => {
  const d = new Date(dateStr)
  const h = d.getHours()
  const hh = h % 12
  const m = d.getMinutes()
  return `${hh ? hh : 12}:${m < 10 ? `0${m}` : m} ${h >= 12 ? 'pm' : 'am'}`
}

const nowY = () => {
  const d = new Date()
  return d.getFullYear()
}

module.exports = {
  dateF,
  timeF,
  nowY
}
