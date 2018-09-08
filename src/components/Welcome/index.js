import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import { OauthSender } from 'react-oauth-flow';
import HandleUser from '../HandleUser/HandleUser';


export const Welcome = () => {
  return (
    <div className="welcome">
      <h1>WELCOME</h1>
      <OauthSender
        authorizeUrl="https://api.pinterest.com/oauth/"
        clientId={'4987807426915878592'}
        redirectUri="https://localhost:3000/"
        // state={{ from: '/settings' }}
        args={{ scope: 'read_public', response_type: 'code' }}
        render={({ url }) => <a href={url}>LINK</a>}
      />

    </div>
  )
}
