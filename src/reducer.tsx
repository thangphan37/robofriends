import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_SUCCESS, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_PENDING } from "./constants";
import {Action, Reducer} from "redux";
import {Robot} from './components/CardList';

type StateSearchField = {
  searchField: string
};

type StateRobots = {
  robots: Robot[];
  isPending: boolean;
  error: string;
};

type ActionPayload = Action & {
  payload?: any
}

const initState: StateSearchField = {
  searchField: ''
};

export const searchRobots: Reducer<StateSearchField, ActionPayload>= (state = initState, action = {type: ''}) => {
  if (action.type === CHANGE_SEARCH_FIELD) {
    return Object.assign({}, state, {searchField: action.payload});
  } else {
    return state;
  }
};

const initRobots: StateRobots = {
  robots: [],
  isPending: false,
  error: ''
};

export const requestRobots: Reducer<StateRobots, ActionPayload>  = (state = initRobots, action = {type: ''}) => {
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