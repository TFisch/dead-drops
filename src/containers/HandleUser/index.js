import React, { Component } from 'react';
import { id } from '../../hidden/hidden'
import { getToken } from '../../actions'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'
import { Profile } from '../Profile'

class HandleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorizationCode: '',
      fireRedirect: false
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
    await this.setState({ fireRedirect: true })
    this.props.getToken(result.access_token);
  }

  render() {
    return (

      <div>
        {this.state.fireRedirect && (
          <Redirect to={'/profile'} />
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userToken: state.token
})

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(HandleUser);
