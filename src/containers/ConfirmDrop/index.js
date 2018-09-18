import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPin } from '../../api';
import './ConfirmDrop.css';
import PropTypes from 'prop-types';

export class ConfirmDrop extends Component {
  constructor(props) {
    super(props);
  }

  handleConfirm = () => {
    const { latitude, longitude, image } = this.props.location;
    const note = `Latitude: ${latitude}, Longitude: ${longitude}`;
    postPin(note, this.props.token, image);
    this.props.toggleSubmit();
  }

  handleEdit = () => {
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
              <button className="edit-button" name="edit" onClick={() => this.handleEdit()}>EDIT</button>
              <button className="confirm-button" name="confirm" onClick={() => this.handleConfirm()}>CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConfirmDrop.propTypes = {
  token: PropTypes.string,
  toggleSubmit: PropTypes.func,
  location: PropTypes.object
};

export const mapStateToProps = (state) => ({
  token: state.token,
  location: state.locationData
});

export default connect(mapStateToProps)(ConfirmDrop);
