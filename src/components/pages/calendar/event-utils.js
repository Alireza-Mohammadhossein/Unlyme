
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowStr = tomorrow.toISOString().replace(/T.*$/, '')


const afterTomorrow = new Date(tomorrow)
afterTomorrow.setDate(afterTomorrow.getDate() + 8)
const afterTomorrowStr = afterTomorrow.toISOString().replace(/T.*$/, '')




export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'Test event',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T13:00:00',
    category: 'Personal',
    color: '#653EB92e',
    textColor: '#653EB9',
    borderColor: '#653EB9'
  },
  {
    id: createEventId(),
    title: 'Developing event',
    start: todayStr + 'T15:00:00',
    end: todayStr + 'T16:00:00',
    category: 'Public',
    color: '#4C9FBE2e',
    textColor: '#4C9FBE',
    borderColor: '#4C9FBE'
  },
  {
    id: createEventId(),
    title: 'This is a test event for tomorrow',
    start: tomorrowStr + 'T15:30:00',
    end: tomorrowStr + 'T16:30:00',
    category: 'Birthday',
    color: '#C6870E2e',
    textColor: '#C6870E',
    borderColor: '#C6870E'
  },
  {
    id: createEventId(),
    title: 'Test event for a day after tomorrow',
    start: afterTomorrowStr + 'T10:30:00',
    end: afterTomorrowStr + 'T13:30:00',
    category: 'Holiday',
    color: '#4C91DD2e',
    textColor: '#4C91DD',
    borderColor: '#4C91DD'
  }
]

export function createEventId() {
  return String(eventGuid++)
}