import axios from "axios";

// const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL = "https://51.91.151.225/";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getEvents = (from, to) => {
  return api.get("/events", { params: { from, to } });
};

export const updateEvent = (id, eventData) => {
  return api.put(`/events/${id}`, eventData);
};

export const deleteEvent = (id) => {
  return api.delete(`/events/${id}`);
};

export const createEvent = (eventData) => {
  return api.post("/events", eventData);
};

export const getCalendars = () => {
  return api.get("/calendars");
};

export const updateCalendar = (id, calendarData) => {
  return api.put(`/calendars/${id}`, calendarData);
};

export const deleteCalendar = (id) => {
  return api.delete(`/calendars/${id}`);
};

export const createCalendar = (calendarData) => {
  return api.post("/calendars", calendarData);
};

export const getUnits = () => {
  return api.get("/units");
};

export const getSections = () => {
  return api.get("/sections");
};
