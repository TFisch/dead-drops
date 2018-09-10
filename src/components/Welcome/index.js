import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import { OauthSender, OauthReceiver } from 'react-oauth-flow';
import HandleUser from '../HandleUser';
import { id } from '../../hidden/hidden'

export const Welcome = () => {
  const url = "https://api.pinterest.com/oauth/?" +
    "response_type=code&" +
    "redirect_uri=https://4415d173.ngrok.io/profile&" +
    "scope=read_public,write_public,read_relationships,write_relationships&" +
    "client_id=4987807426915878592"
  return (
    <div className="welcome">
      <h1>WELCOME</h1>
      {/* <OauthSender
        authorizeUrl="https://api.pinterest.com/oauth/"
        clientId={'4987807426915878592'}
        redirectUri="https://6341b039.ngrok.io/profile"
        // state={{ from: '/settings' }}
        args={{ scope: 'read_public', response_type: 'code' }}
        render={({ url }) => <a href={url}>Sign In With Pinterest</a>}
      /> */}
      <a href={url}>Start the process</a>
    </div>

  )

}
