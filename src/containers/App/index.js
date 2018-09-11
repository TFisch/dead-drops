import React, { Component } from 'react';
import { Welcome } from '../../components/Welcome/'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DropSubmitForm } from '../DropSubmitForm/';
import { Profile } from '../Profile/';
import { Nav } from '../Nav'
import './App.css';
import HandleUser from '../HandleUser';

export class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/handleuser' component={HandleUser} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dropsubmitform' component={DropSubmitForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
