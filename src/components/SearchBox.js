import React from 'react';

function SearchBox({onSearchRobot}) {
  return(
    <div className="pa2">
      <input type="search" className="pa3 ba b--green bg-lightest-blue" onChange={onSearchRobot} placeholder="Search robot"/>
    </div>
  )
}

export default SearchBox;