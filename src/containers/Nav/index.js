import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {
  return (
    <div className="nav">
      <Link to='/dropSubmitForm'><button className="post-button">Post A Drop</button></Link>
      <Link to='/'><button className="logout-button">Log Out</button></Link>
    </div>
  )
}