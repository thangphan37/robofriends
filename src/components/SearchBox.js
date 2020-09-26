import React from 'react';

function SearchBox({onSearchRobots}) {
  return(
    <div className="pa2">
      <input type="search" className="pa3 ba b--green bg-lightest-blue" onChange={onSearchRobots} placeholder="Search robot"/>
    </div>
  )
}

export default SearchBox;