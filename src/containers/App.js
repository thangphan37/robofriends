import React, {useState, useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import ScrollRobot from '../components/ScrollRobot';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    async function fetchRobots() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const robots = await response.json();
      
      setRobots(robots);
    }

    fetchRobots();
  }, []);

  function onSearchRobot(event) {
    setSearchField(event.target.value);
  }

  const filterRobot = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="tc pa3">
      <h1>ROBOFRIENDS</h1>
      <SearchBox searchField={searchField} onSearchRobot={onSearchRobot}/>
      <ScrollRobot>
        <CardList robots={filterRobot}/>
      </ScrollRobot>
    </div>
  );
}

export default App;
