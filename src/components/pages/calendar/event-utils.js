
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'Test event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'this is a test event for dveloping the calendar',
    start: todayStr + 'T15:30:00',
    end: todayStr + 'T16:30:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}