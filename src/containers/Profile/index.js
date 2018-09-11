import React, { Component } from 'react';
import HandleUser from '../HandleUser';
import { getProfileImage, getToken } from '../../actions/index';
import { connect } from 'react-redux';

export class Profile extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <HandleUser />
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  userImage: state.userImage,
  userToken: state.token
});

export const mapDispatchToProps = (dispatch) => ({
  getProfileImage: (image) => dispatch(getProfileImage(image)),
  geToken: (token) => dispatch(getToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);