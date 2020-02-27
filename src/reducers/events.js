const initialState = null;

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.events;

    default:
      return state;
  }
}
