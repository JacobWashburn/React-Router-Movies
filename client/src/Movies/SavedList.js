import React from 'react';
import {Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie,index) => (
      <span key={index} className="saved-movie">{movie.title}</span>
    ))}
      <button onClick={()=> props.setSaved([])}>Clear Saved List</button>
    <Link to='/'>Home</Link>
  </div>
);

export default SavedList;
