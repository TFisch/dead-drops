import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPin } from '../../api'
import './ConfirmDrop.css'

class ConfirmDrop extends Component {
  constructor(props) {
    super(props)
  }

  handleConfirm = (e) => {
    const { latitude, longitude } = this.props.location;
    const note = `Latitude: ${latitude}, Longitude: ${longitude}`;
    postPin(note, this.props.token)
    this.props.toggleSubmit();
  }

  render() {
    const { latitude, longitude, image, verificationCode } = this.props.location;
    return (
      <div className="confirm-form">
        <div className="data-wrap">
          <img className="location-display" src={image} alt="coordinate-location" />
          <h4>Longitude: {longitude}</h4>
          <h4>Latitude: {latitude}</h4>
          <span className="button-wrap">
            <h4>Unique Verification Code: {verificationCode} </h4>
            <button className="submit-button" onClick={(e) => this.handleConfirm(e)}>CONFIRM</button>
          </span>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user,
  location: state.locationData
});

export default connect(mapStateToProps)(ConfirmDrop);
