const initialState = null;

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.events;
    case "EVENT_CREATE_SUCCESS":
      if (state) {
        return [...state, action.event];
      } else {
        return action.event;
      }
    default:
      return state;
  }
}
