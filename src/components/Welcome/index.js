import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import { OauthSender, OauthReceiver } from 'react-oauth-flow';
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
      <a href={url}>Start the process</a>
    </div>

  )

}
