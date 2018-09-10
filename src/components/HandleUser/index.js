import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import { id } from '../../hidden/hidden'
import { getToken } from '../../actions'

export default class HandleUser extends Component {
  constructor() {
    super()
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

  handleSuccess = async (accessToken, { response, state }) => {
    console.log('Successfully authorized');
    // await setProfileFromDropbox(accessToken);
    // await redirect(state.from);
  };

  handleError = error => {
    console.error('An error occured');
    console.error(error.message);
  };


  render() {
    const url = 'https://api.pinterest.com/v1/oauth/token'
    return (

      <div>

      </div>
    );
  }
}
