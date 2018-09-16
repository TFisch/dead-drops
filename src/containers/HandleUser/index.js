import React, { Component } from 'react';
import { id } from '../../hidden/hidden'
import { getToken, setUser } from '../../actions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUserImage, fetchAccessToken } from '../../api/apiCalls'


export class HandleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorizationCode: '',
      fireRedirect: false,
      tokenFetched: false
    }
  }

  async componentDidMount() {
    if (!this.state.tokenFetched) {
      let code;
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (value) {
        code = value;
      });
      const newCode = code.split('').splice(6, code.length).join('')
      await this.setState({ authorizationCode: newCode })
      await this.getAccessToken();
    }
  }

  getAccessToken = async () => {
    const response = await fetchAccessToken(id, this.state.authorizationCode);
    await this.setState({ fireRedirect: true, tokenFetched: true })
    this.props.getToken(response.access_token);
    this.getUserImage(response.access_token);
  }

  async getUserImage(token) {
    const fetchedUser = await fetchUserImage(token);
    await this.props.setUser(fetchedUser);
  }

  render() {
    return (
      <div>
        {this.state.fireRedirect && (
          <Redirect to={'/profile'} />
        )}
        <h1>Loading...</h1>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
  setUser: (user) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(HandleUser);
