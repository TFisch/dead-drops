import React, { Component } from 'react';
import { getProfileImage } from '../../actions';
import { connect } from 'react-redux';
import { fetchUserImage } from '../../api/apiCalls'
import { Link } from 'react-router-dom';
import './Profile.css'
import { DropSubmitForm } from '../DropSubmitForm';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      image: '',
      dropFormActive: false
    }
  }

  componentDidUpdate() {
    this.retrieveProfilePicture();
  }

  retrieveProfilePicture = async () => {
    const token = this.props.userToken.token;
    const fetchedImage = await fetchUserImage(token);
    const { username, image } = fetchedImage
    this.setState({ username, image }, () => console.log(this.state))
  }

  handlePost = () => {
    const dropFormActive = !this.state.dropFormActive;
    this.setState({ dropFormActive })
  }

  render() {
    const { username, image, dropFormActive } = this.state
    return (
      <div className="container">
        <div className='user-profile'>
          <div className="post-wrap">
            <div className="profile-wrap">
              <img src={image} alt="user-profile-picture" className='profile-image' />
              <h1>Welcome, {username}</h1>
            </div>
            <button className="post-button" onClick={this.handlePost}>POST A DEAD DROP</button>
          </div>
          {dropFormActive && < DropSubmitForm />}
        </div>
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
