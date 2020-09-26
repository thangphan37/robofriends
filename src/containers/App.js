import React, {useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import ScrollRobot from '../components/ScrollRobot';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { searchRobots, requestRobots } from '../action';

function App() {
  const searchField = useSelector(state => state.searchRobots.searchField);
  const robots = useSelector(state => state.requestRobots.robots);
  const isPending = useSelector(state => state.requestRobots.isPending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filterRobot = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()));
  
  return (isPending ? <h1>Loading...</h1>: (
    <div className="tc pa3">
      <h1>ROBOFRIENDS</h1>
      <SearchBox searchField={searchField} onSearchRobots={event => dispatch(searchRobots(event.target.value))}/>
      <ScrollRobot>
        <CardList robots={filterRobot}/>
      </ScrollRobot>
    </div>
  ))
}

export default (App);
