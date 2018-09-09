import React, { Component } from 'react';
import HandleUser from '../../components/HandleUser';
import { retrieveToken } from '../../api/apiCalls'


export class Profile extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <h1>HI</h1>
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