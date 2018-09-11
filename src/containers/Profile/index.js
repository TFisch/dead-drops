import React, { Component } from 'react';
import HandleUser from '../HandleUser';
import { getProfileImage } from '../../actions';
import { connect } from 'react-redux';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  retrieveProfilePicture = () => {
    const url = `https://api.pinterest.com/v1/me/?access_token={token}&fields=image`

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <HandleUser />
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  userToken: state.token
});

export const mapDispatchToProps = (dispatch) => ({
  getProfileImage: (image) => dispatch(getProfileImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
