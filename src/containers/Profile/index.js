import React, { Component } from 'react';
import { getProfileImage } from '../../actions';
import { connect } from 'react-redux';
import { fetchUserImage } from '../../api/apiCalls'
import { Link } from 'react-router-dom';
import './Profile.css'

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      image: ''
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

  render() {
    const { username, image } = this.state
    return (
      <div className='user-profile'>
        <div className="post-wrap">
          <div className="profile-wrap">
            <img src={image} alt="user-profile-picture" className='profile-image' />
            <h1>Welcome, {username}</h1>
          </div>
          <Link to='/DropSubmitForm'><button className="post-button">POST A DEAD DROP</button></Link>
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
