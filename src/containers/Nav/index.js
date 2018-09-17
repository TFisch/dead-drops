import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFormActive, resetConfirm, resetFormActive } from '../../actions'
import './style.css';

export class Nav extends Component {
  constructor() {
    super()

  }

  handleSubmitButton = () => {
    this.props.setFormActive(true)
  }

  handleProfileButton = () => {
    this.props.resetConfirm()
    this.props.resetFormActive()
  }

  render() {
    return (
      <div className="nav">
        <h1 className="logo">DEAD DROPS</h1>
        <div className='buttons'>
          <div className="nav-buttons-wrap">
            {this.props.user.username &&
              <Link to='/profile'><button className="nav-button" onClick={this.handleSubmitButton}>SUBMIT DROP</button></Link>
            }
            {this.props.user.username &&
              <Link to='/profile'><button className="nav-button" onClick={this.handleProfileButton}>PROFILE</button></Link>
            }
            {this.props.user.username &&
              <Link to='/'><button className="nav-button">LOG OUT</button></Link>
            }
          </div>
          <button className="pinterest-button">
            <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" alt="pinterest-icon" />
          </button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  formActive: state.formActive,
  user: state.user,
  location: state.locationData
});

export const mapDispatchToProps = (dispatch) => ({
  setFormActive: (status) => dispatch(setFormActive(status)),
  resetConfirm: (status) => dispatch(resetConfirm(status)),
  resetFormActive: (status) => dispatch(resetFormActive(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);