import {
  EVENTS_FETCH_SUCCESS
} from './types';


// an action creator returns a function
export const selectEvent = (eventId) => {
  return {
    type: 'select_event',
    payload: eventId
  };
};
