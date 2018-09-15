import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';

export const Nav = (props) => {
  return (
    <div className="nav">
      <h1 className="logo">DEAD DROPS</h1>
      {props.user.username &&
        <Link to='/'><button className="logout-button">Log Out</button></Link>
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user
})

export default connect(mapStateToProps)(Nav);