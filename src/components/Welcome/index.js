import React from 'react';
import './style.css';

export const Welcome = () => {
  const url = "https://api.pinterest.com/oauth/?" +
    "response_type=code&" +
    "redirect_uri=https://ce2f9bf7.ngrok.io/HandleUser&" +
    "scope=read_public,write_public,read_relationships,write_relationships&" +
    "client_id=4987807426915878592"
  return (
    <div className="welcome">
      <h1 className="welcome-text">WELCOME</h1>
      <div className="login">
        <a className="auth-link" href={url}>CLICK HERE TO SIGN IN WITH PINTEREST</a>
      </div>
    </div>

  )

}
