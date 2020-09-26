import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_SUCCESS } from "./constants";

export const searchRobots = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => async (dispatch) => {
  dispatch({type: REQUEST_ROBOT_PENDING});
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await response.json();
    dispatch({type: REQUEST_ROBOT_SUCCESS, payload: robots});
  } catch (error) {
    dispatch({type: REQUEST_ROBOT_FAILED, payload: error});
  }
}