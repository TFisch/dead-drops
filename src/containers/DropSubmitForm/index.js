import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../../api';
import { getLocation, setConfirm, resetFormActive } from '../../actions';
import PropTypes from 'prop-types';
import './DropSubmitForm.css';

export class DropSubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: "",
      longitude: "",
      latitude: "",
      drop: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  sendCoordinates = async (event) => {
    event.preventDefault();
    const returnedLocation = await fetchLocation(this.state);
    await this.props.getLocation(returnedLocation);
    this.props.toggleSubmit();
    this.props.setConfirm(true);
    this.props.resetFormActive();
  }

  render() {
    return (
      <div>
        <form className="drop-submit" onSubmit={(event) => this.sendCoordinates(event)}>
          <div className="drop-form">
            <span className="entry-row">
              <h3 className="category">Latitude Coordinates</h3>
              <input name="latitude" className="co-entry" placeholder="enter coordinates..." type="number" value={this.state.latitude} onChange={this.handleChange} />
            </span>
            <span className="entry-row">
              <h3 className="category">Longitude Coordinates</h3>
              <input name="longitude" className="co-entry" placeholder="enter coordinates..." type="number" value={this.state.longitude} onChange={this.handleChange} />
            </span>
            <span className="button-row">
              <button name="submit-co-button" className="submit-button form-row">SUBMIT</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user,
  location: state.locationData
});

export const mapDispatchToProps = (dispatch) => ({
  getLocation: (locationData) => dispatch(getLocation(locationData)),
  setConfirm: (status) => dispatch(setConfirm(status)),
  resetFormActive: (status) => dispatch(resetFormActive(status))
});

DropSubmitForm.propTypes = {
  toggleSubmit: PropTypes.func,
  token: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object,
  setConfirm: PropTypes.object,
  getLocation: PropTypes.func,
  user: PropTypes.obj,
  resetFormActive: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DropSubmitForm);

