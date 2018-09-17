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

  handleEdit = (e) => {
    this.props.toggleSubmit();
  }

  render() {
    const { latitude, longitude, image, verificationCode } = this.props.location;
    return (
      <div className="confirm-form">
        <div className="data-wrap">
          <div className="column-left-wrap">
            <div className="stat-wrap">
              <h3 className="category-confirm" id="longitude">Longitude</h3>
              <h2 className="output">{longitude}</h2>
            </div>
            <div className="stat-wrap">
              <h3 className="category-confirm">Latitude</h3>
              <h2 className="output"> {latitude}</h2>
            </div>
            <div className="stat-wrap">
              <h3 className="category-confirm">Unique Verification Code</h3>
              <h2 className="output"> {verificationCode}</h2>
            </div>
          </div>
          <div className="column-right-wrap">
            <img className="location-display" src={image} alt="coordinate-location" />
            <div className="button-wrap-confirm">
              <button className="edit-button" onClick={(e) => this.handleEdit(e)}>EDIT</button>
              <button className="confirm-button" onClick={(e) => this.handleConfirm(e)}>CONFIRM</button>
            </div>
          </div>
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
