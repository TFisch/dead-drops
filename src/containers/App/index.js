import React, { Component } from 'react';
import { Welcome } from '../../components/Welcome/'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DropSubmitForm } from '../DropSubmitForm/';
import { Nav } from '../Nav'
import './App.css';
import HandleUser from '../../components/HandleUser';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/Handleuser' component={HandleUser} />
            <Route exact path='/dropSubmitForm' component={DropSubmitForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
