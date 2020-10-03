import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED,
  REQUEST_ROBOT_PENDING
} from "./constants";

import * as reducers from './reducers';

describe('test searchRobots reducer', () => {
  it('init state searchField', () => {
    expect(reducers.searchRobots()).toEqual({searchField: ''})
  });

  it('should CHANGE_SEARCH_FIELD robots', () => {
    expect(reducers.searchRobots(undefined, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'a'
    })).toEqual({
      searchField: 'a'
    })
  });

  it('should default searchRobots', () => {
    expect(reducers.searchRobots(undefined, {
      type: 'default',
    }))
      .toEqual({
        searchField: ''
      })
  });
})

describe('test requestRobots reducer', () => {
  it('should init state robots', () => {
    expect(reducers.requestRobots()).toEqual({robots: [], error: '', isPending: false})
  });

  it('should REQUEST_ROBOT_PENDING robots', () => {
    expect(reducers.requestRobots(undefined, {
      type: REQUEST_ROBOT_PENDING
    }))
      .toEqual({
        robots: [],
        isPending: true,
        error: ''
      })
  });

  it('should REQUEST_ROBOT_SUCCESS robots', () => {
    expect(reducers.requestRobots([], {
      type: REQUEST_ROBOT_SUCCESS,
      payload: [{
        id: 1,
        username: 'John',
        email: 'john@gmail.com'
      }]
    }))
      .toEqual({
        robots: [{
          id: 1,
          username: 'John',
          email: 'john@gmail.com'
        }],
        isPending: false,
      })
  });

  it('should REQUEST_ROBOT_FAILED robots', () => {
    expect(reducers.requestRobots(undefined, {
      type: REQUEST_ROBOT_FAILED,
      payload: 'NOOOOOOOO!'
    }))
      .toEqual({
        error: 'NOOOOOOOO!',
        isPending: false,
        robots: []
      })
  });

  it('should default requestRobots', () => {
    expect(reducers.requestRobots(undefined, {
      type: 'default',
    }))
      .toEqual({
        robots: [],
        isPending: false,
        error: ''
      })
  });
})
