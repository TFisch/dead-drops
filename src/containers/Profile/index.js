import React, { Component } from 'react';
import HandleUser from '../HandleUser';
import { getProfileImage } from '../../actions';
import { connect } from 'react-redux';
import { fetchUserImage } from '../../api/apiCalls'

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidUpdate() {
    this.retrieveProfilePicture();
  }

  retrieveProfilePicture = async () => {
    const token = this.props.userToken.token;
    await fetchUserImage(token);
  }

  render() {
    return (
      <div>
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  userToken: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  getProfileImage: (image) => dispatch(getProfileImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
