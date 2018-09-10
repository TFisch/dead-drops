import React, { Component } from 'react';
import HandleUser from '../../components/HandleUser';
import { retrieveToken } from '../../api/apiCalls';
import { getProfileImage } from '../../actions/index';
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
});

export const mapDispatchToProps = (dispatch) => ({
  getProfileImage: (image) => dispatch(getProfileImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);