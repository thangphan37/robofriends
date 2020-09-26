import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_SUCCESS, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_PENDING } from "./constants";


const initState = {
  searchField: ''
};

export const searchRobots = (state = initState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

const initRobots = {
  robots: [],
  isPending: false,
  error: ''
};

export const requestRobots = (state = initRobots, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOT_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_ROBOT_SUCCESS:
      return Object.assign({}, state, {isPending: false, robots: action.payload});
    case REQUEST_ROBOT_FAILED:
      return Object.assign({}, state, {isPending: false, error: action.payload});
    default:
      return state;
  }
}