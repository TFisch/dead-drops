import React from 'react';
import './style.css';

export const Welcome = () => {
  const url = "https://api.pinterest.com/oauth/?" +
    "response_type=code&" +
    "redirect_uri=https://fb68abe0.ngrok.io/HandleUser&" +
    "scope=read_public,write_public,read_relationships,write_relationships&" +
    "client_id=4987807426915878592"
  return (
    <div className="welcome">
      <h1>WELCOME</h1>
      <a href={url}>Sign In With Pinterest</a>
    </div>

  )

}
