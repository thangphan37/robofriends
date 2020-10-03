import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { searchRobots, requestRobots } from '../action';
import MainPage from '../components/MainPage';

function App() {
  const searchField = useSelector(state => state.searchRobots.searchField);
  const robots = useSelector(state => state.requestRobots.robots);
  const isPending = useSelector(state => state.requestRobots.isPending);
  const dispatch = useDispatch();
  return <MainPage 
          robots={robots} 
          searchField={searchField} 
          isPending={isPending}
          searchRobots={(e) => dispatch(searchRobots(e.target.value))} 
          requestRobots={() => dispatch(requestRobots())}/>
}

export default (App);
