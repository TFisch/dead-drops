import React, { Component } from 'react';
import { getToken, setUser } from '../../actions';
import { connect } from 'react-redux';
import { fetchUserImage, fetchDropBoard } from '../../api/apiCalls'
import './Profile.css'
import { DropSubmitForm } from '../DropSubmitForm';
import { DropList } from '../../components/DropList';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      image: '',
      dropFormActive: false,
      dropListRetrieved: false,
      pictureRetrieved: false,
      retrievedBoard: []
    }
  }

  componentDidUpdate() {
    if (!this.state.dropListRetrieved) {
      // this.retrieveDropBoard();
    }

  }

  retrieveDropBoard = async () => {
    const token = this.props.userToken.token;
    // const retrievedBoard = await fetchDropBoard(token);
    // await this.setState({ retrievedBoard, dropListRetrieved: true })
  }

  handlePost = () => {
    const dropFormActive = !this.state.dropFormActive;
    this.setState({ dropFormActive })
  }

  render() {
    const { username, image } = this.props.user;
    const { dropFormActive, retrievedBoard, dropListRetrieved } = this.state
    return (
      <div className="container">
        <div className='user-profile'>
          <div className="post-wrap">
            <div className="profile-wrap">
              <img src={image} className='profile-image' alt='user-avatar' />
              <h1>Welcome, {username}!</h1>
            </div>
            {!dropFormActive && <button className="post-button" onClick={this.handlePost}>POST A DEAD DROP</button>}
          </div>
          {dropFormActive && < DropSubmitForm />}
        </div>
        <div className="board-display">
          {dropListRetrieved && <DropList retrievedBoard={retrievedBoard} />}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user
});


export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
  setUser: (user) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
