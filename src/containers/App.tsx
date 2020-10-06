import React, {useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import ScrollRobot from '../components/ScrollRobot';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { searchRobots, requestRobots } from '../action';
import {Robot} from '../components/CardList';
import {RootState} from '../index';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const searchField: string = useSelector((state: RootState) => state.searchRobots.searchField);
  const robots: Robot[] = useSelector((state: RootState) => state.requestRobots.robots);
  const isPending: boolean = useSelector((state: RootState) => state.requestRobots.isPending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filterRobot: Robot[] = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()));
  
  return (isPending ? <h1>Loading...</h1>: (
    <div className="tc pa3">
      <h1>ROBOFRIENDS</h1>
      <SearchBox onSearchRobots={(event: React.FormEvent<HTMLInputElement>) => dispatch(searchRobots((event.target as HTMLInputElement).value))}/>
      <ScrollRobot>
        <CardList robots={filterRobot}/>
      </ScrollRobot>
    </div>
  ))
}

export default (App);
