import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFormActive, resetConfirm, resetFormActive } from '../../actions';
import PropTypes from 'prop-types';
import './style.css';

export class Nav extends Component {
  constructor() {
    super();
  }

  handleSubmitButton = () => {
    const { setFormActive, resetConfirm } = this.props;
    setFormActive(true);
    resetConfirm();
  }

  handleProfileButton = () => {
    const { resetFormActive, resetConfirm } = this.props;
    resetFormActive();
    resetConfirm();
  }

  render() {
    return (
      <div className="nav">
        <div className="wrap-left">
          <img className="icon" src={require('../../utilities/images/treasure.svg')} alt="treasure-icon" />
          <h1 className="logo">DEAD DROPS</h1>
        </div>
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
          <a href='https://www.pinterest.com/deaddrops/dead-drops-official/'>
            <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" alt="pinterest-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  setFormActive: (status) => dispatch(setFormActive(status)),
  resetConfirm: () => dispatch(resetConfirm()),
  resetFormActive: () => dispatch(resetFormActive())
});

Nav.propTypes = {
  user: PropTypes.object,
  setFormActive: PropTypes.func,
  resetConfirm: PropTypes.func,
  resetFormActive: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);