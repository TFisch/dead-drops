import React, { Component } from 'react';
import { id } from '../../hidden/hidden'
import { getToken } from '../../actions'
import { connect } from 'react-redux';

class HandleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorizationCode: ''
    }
  }

  async componentDidMount() {
    let code;
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (value) {
      code = value;
    });
    const newCode = code.split('').splice(6, code.length).join('')
    await this.setState({ authorizationCode: newCode })
    await this.getAccessToken()
  }

  async getAccessToken() {
    const accessTokenUrl = 'https://api.pinterest.com/v1/oauth/token?' +
      'grant_type=authorization_code&' +
      'client_id=4987807426915878592&' +
      `client_secret=${id}&` +
      `code=${this.state.authorizationCode}`
    const response = await fetch(accessTokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded '
      }
    })
    const result = await response.json();
    getToken(result.access_token);
  }

  render() {
    console.log(this.props)
    const url = 'https://api.pinterest.com/v1/oauth/token'
    return (

      <div>

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userToken: state.userToken
})

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(HandleUser);