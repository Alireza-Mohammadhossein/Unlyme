
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'this is a test event for dveloping the calendar',
    start: '2023-05-17T12:30:00-05:00',
    end: '2023-05-17T14:30:00-05:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}