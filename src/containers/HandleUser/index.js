import React, { Component } from 'react';
import { id } from '../../hidden/hidden';
import { getToken, setUser } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUserImage, fetchAccessToken } from '../../api';
import PropTypes from 'prop-types';

export class HandleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorizationCode: '',
      fireRedirect: false,
      tokenFetched: false
    };
  }

  componentDidMount = async () => {
    if (!this.state.tokenFetched) {
      let code;
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (value) {
        code = value;
      });
      const newCode = code.split('').splice(6, code.length).join('');
      await this.setState({ authorizationCode: newCode });
      await this.getAccessToken();
    }
  }

  getAccessToken = async () => {
    const response = await fetchAccessToken(id, this.state.authorizationCode);
    await this.setState({ fireRedirect: true, tokenFetched: true });
    this.props.getToken(response.access_token);
    this.getUserImage(response.access_token);
  }

  getUserImage = async (token) => {
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
});

export const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
  setUser: (user) => dispatch(setUser(user))
});

HandleUser.propTypes = {
  getToken: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  setUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleUser);
