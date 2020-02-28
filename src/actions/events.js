import request from "superagent";

const baseUrl = "http://localhost:4000";
// show all events name
export const EVENTS_FETCHED = "EVENTS_FETCHED";
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});
export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;
  request
    .get(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};
// add new event
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});
export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};
// show single event info
export const EVENT_FETCHED = "EVENT_FETCHED";
const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});
export const loadEvent = id => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};
//delete single event
export const EVENT_DELETED = "EVENT_DELETED";
const eventDeleted = id => ({
  type: EVENT_DELETED,
  id
});
export const deleteEvent = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventDeleted(id));
    })
    .catch(console.error);
};
// update event
export const EVENT_UPDATED = "EVENT_UPDATED";
const eventUpdated = event => ({
  type: EVENT_UPDATED,
  event
});
export const updateEvent = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(res => {
      dispatch(eventUpdated(res.body));
    });
};
