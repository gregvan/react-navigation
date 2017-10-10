//import data from './LibraryList.json';

export default (state = null, action) => {
  // state = null is for the 1st time the reducer runs (written in ES6)
  // console.log(action);
  // return null;
  // this is generic boiler plate
  switch (action.type) {
    case 'select_event':
      // return the action
      return action.payload;
    default:
      // must return something even is spurious calls
      return state;
      // this returns whatever you returned with the last valid call
    }
};
