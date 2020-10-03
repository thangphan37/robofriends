import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_SUCCESS } from "./constants";
import * as actions from './action';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should create an action to search robots', () => {
  expect(actions.searchRobots('ok')).toEqual({
    type: CHANGE_SEARCH_FIELD,
    payload: 'ok'
  });
});

it('should create an action to request success robots', () => {
  const store = mockStore();

  return store.dispatch(actions.requestRobots()).then(
    () => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: REQUEST_ROBOT_PENDING
      });
      expect(actions[1].type).toEqual(REQUEST_ROBOT_SUCCESS);
    }
  )
});

it('should create an action to request failed robots', () => {
  const store = mockStore();
  
  nock('https://jsonplaceholder.typicode.com')
    .get('/users')
    .replyWithError('something awful happened');
  return store.dispatch(actions.requestRobots()).then(
    () => {
      const actions = store.getActions();
      
      expect(actions[1].type).toEqual(REQUEST_ROBOT_FAILED);
    }
  )
});

