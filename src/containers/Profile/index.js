import React, { Component } from 'react';
import { getToken, setUser } from '../../actions';
import { connect } from 'react-redux';
import { fetchDropBoard } from '../../api'
import './Profile.css'
import DropSubmitForm from '../DropSubmitForm';
import { DropList } from '../../components/DropList';
import ConfirmDrop from '../ConfirmDrop';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      image: '',
      dropFormActive: false,
      dropListRetrieved: false,
      dropListHidden: false,
      pictureRetrieved: false,
      retrievedBoard: [],
      dropToConfirm: false
    }
  }

  componentDidUpdate() {
    if (!this.state.dropListRetrieved) {
      this.retrieveDropBoard();
    }
  }

  retrieveDropBoard = async () => {
    const token = this.props.token
    const retrievedBoard = await fetchDropBoard(token);
    await this.setState({ retrievedBoard, dropListRetrieved: true })
  }

  handlePost = () => {
    const dropFormActive = !this.state.dropFormActive;
    this.setState({ dropFormActive })
  }

  toggleSubmit = (boolean) => {
    this.setState({ dropToConfirm: boolean, dropListHidden: true })
  }

  toggleDisplay = () => {
    const dropListHidden = !this.state.dropListHidden;
    this.setState({ dropListHidden })
  }

  render() {
    const { username, image } = this.props.user;
    const {
      dropFormActive,
      retrievedBoard,
      dropListRetrieved,
      dropToConfirm,
      dropListHidden
    } = this.state;

    return (
      <div className="container">
        <div className='user-profile'>
          <div className="post-wrap">
            <div className="profile-wrap">
              <img src={image} className='profile-image' alt='user-avatar' />
              <h1 className="welcome-text">Welcome, {username}!</h1>
            </div>
            {!dropFormActive && <button className="post-button" onClick={this.handlePost}>POST A DEAD DROP</button>}
          </div>
          {dropFormActive && <DropSubmitForm toggleSubmit={this.toggleSubmit} />}
        </div>
        <div className="board-display">
          {dropListRetrieved && !dropListHidden && < DropList retrievedBoard={retrievedBoard} />}
          {dropToConfirm && dropListHidden && <ConfirmDrop toggleDisplay={this.toggleDisplay} />}
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

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
