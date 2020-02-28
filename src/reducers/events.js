const initialState = null;
// eventS
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
    case "EVENT_DELETED":
      const result = state.filter(event => event.id !== action.id);
      return result;
    default:
      return state;
  }
}
