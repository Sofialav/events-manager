// single event
const initialState = null;

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_FETCHED":
      return action.event;

    default:
      return state;
  }
}
