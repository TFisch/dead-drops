import React, { Component } from 'react';
import HandleUser from '../HandleUser';
import { getProfileImage } from '../../actions';
import { connect } from 'react-redux';
import { fetchUserImage, fetchedUsername } from '../../api/apiCalls'

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileImage: ''
    }
  }

  componentDidUpdate() {
    this.retrieveProfilePicture();
  }

  retrieveProfilePicture = async () => {
    const token = this.props.userToken.token;
    const fetchedImage = await fetchUserImage(token);
    this.setState({ profileImage: fetchedImage })
  }

  render() {
    return (
      <div className='user-profile'>
        <img src={this.state.profileImage} alt="user-profile-picture" className='profile-image' />
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
