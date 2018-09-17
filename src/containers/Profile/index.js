import React, { Component } from 'react';
import { getToken, setUser, resetConfirm } from '../../actions';
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
      confirmDropActive: false,
      retrievedBoard: [],
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
    const dropToConfirm = !this.state.dropToConfirm;
    this.setState({ dropFormActive, dropToConfirm })
  }

  toggleSubmit = () => {
    const dropFormActive = !this.state.dropFormActive;
    const confirmDropActive = !this.state.confirmDropActive;
    this.setState({ dropFormActive, confirmDropActive })
    this.props.resetConfirm();

  }


  render() {
    const { username, image } = this.props.user;
    const { setConfirm, formActive } = this.props;
    const {
      retrievedBoard,
    } = this.state;

    return (
      <div className="profile">
        <div className="panel-wrap">
          <div className='user-profile'>
            <div className="post-wrap">
              <div className="profile-wrap">
                <img src={image} className='profile-image' alt='user-avatar' />
                <h1 className="welcome-text">Welcome, {username}!</h1>
              </div>
            </div>
            {formActive === true && <DropSubmitForm toggleSubmit={this.toggleSubmit} />}
            {setConfirm === true && <ConfirmDrop toggleSubmit={this.toggleSubmit} />}
          </div>
          <div className="board-display">
            <DropList retrievedBoard={retrievedBoard} />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user,
  location: state.locationData,
  formActive: state.formActive,
  setConfirm: state.setConfirm
});

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
  setUser: (user) => dispatch(setUser(user)),
  resetConfirm: (status) => dispatch(resetConfirm(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
