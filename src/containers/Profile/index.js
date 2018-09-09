import React, { Component } from 'react';
import HandleUser from '../../components/HandleUser';
import { id } from '../../hidden/hidden'
import { OauthReceiver, OauthSender } from 'react-oauth-flow';
import { retrieveToken } from '../../api/apiCalls'


export class Profile extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  componentDidMount = async () => {
    const code = this.getUrlVars();
    await retrieveToken(code);
  }

  getUrlVars = () => {
    let vars = "";
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars = value;
    });
    return vars;
  }




  render() {

    return (
      <div>
        <h1>HI</h1>
      </div>
    )
  }


}