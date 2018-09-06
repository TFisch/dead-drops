import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className="welcome">
      <h1>WELCOME</h1>
      <a href='https://api.pinterest.com/oauth/?
    response_type=code&
    redirect_uri=https://mywebsite.com/connect/pinterest/&
    client_id=12345&
    scope=read_public&
    state=666' alt="pinterest-login">LINK</a>
    </div>
  )
}