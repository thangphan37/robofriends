import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import ScrollRobot from '../components/ScrollRobot';
import './MainPage.css';
import CounterButton from '../components/CountButton';

function MainPage({isPending, searchRobots, robots, searchField, requestRobots}) {
  React.useEffect(() => {
    requestRobots();
  }, []);

  function getRobots() {
    const newRobots = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()));

    return newRobots;
  }

  return (isPending ? <h1>Loading...</h1>: (
    <div className="tc pa3">
      <h1 id="foo">ROBOFRIENDS</h1>
      <CounterButton />
      <SearchBox searchField={searchField} onSearchRobots={searchRobots}/>
      <ScrollRobot>
        <CardList robots={getRobots()}/>
      </ScrollRobot>
    </div>
  ))
}

export default MainPage;
