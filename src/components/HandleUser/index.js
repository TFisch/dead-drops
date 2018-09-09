import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import { id } from '../../hidden/hidden'

class HandleUser extends Component {
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
    return (
      <OauthReceiver
        tokenUrl="https://api.pinterest.com/v1/oauth/token"
        clientId={'4987807426915878592'}
        clientSecret={id}
        redirectUri="https://localhost:3000/profile"
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
          </div>
        )}
      />
    )
  }
}


export default HandleUser;