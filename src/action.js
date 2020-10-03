import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_SUCCESS } from "./constants";
import { apiCall } from "./api/apiCall";

export const searchRobots = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = (link = 'https://jsonplaceholder.typicode.com/users') => async (dispatch) => {
  dispatch({type: REQUEST_ROBOT_PENDING});
  try {
    const robots = await apiCall(link);
    dispatch({type: REQUEST_ROBOT_SUCCESS, payload: robots});
  } catch (error) {
    dispatch({type: REQUEST_ROBOT_FAILED, payload: error});
  }
}