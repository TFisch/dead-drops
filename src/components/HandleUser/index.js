import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import { id } from '../../hidden/hidden'

export default class HandleUser extends Component {
  constructor() {
    super()
    this.state = {
      accessCode: ''
    }
  }

  componentDidMount() {
    let code;
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      code = value;
      console.log(code);
    });
    this.setState({ accessCode: code })
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
      <OauthReceiver
        tokenUrl={url}
        clientId={'4987807426915878592'}
        clientSecret={id}
        redirectUri="https://6341b039.ngrok.io/profile"
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        args={{ grant_type: 'authorization_code', }}
        tokenFetchArgs={{
          method: 'POST', headers: {
            'Content-Type': 'application/json',
          }
        }}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
          </div>
        )}
      />
    );
  }
}
