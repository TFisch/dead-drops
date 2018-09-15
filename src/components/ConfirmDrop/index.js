import React from 'react';
import { connect } from 'react-redux';
import './ConfirmDrop.css'

export const ConfirmDrop = (props) => {
  const { latitude, longitude, image, verificationCode } = props.location;
  return (
    <div className="confirm-form">
      <div className="data-wrap">
        <img className="location-display" src={image} alt="coordinate-location" />
        <h4>Longitude: {longitude}</h4>
        <h4>Latitude: {latitude}</h4>
        <span class="button-wrap">
          <h4>Unique Verification Code: {verificationCode} </h4>
          <button className="submit-button">CONFIRM</button>
        </span>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user,
  location: state.locationData
});

export default connect(mapStateToProps)(ConfirmDrop);
