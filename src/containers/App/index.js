import React, { Component } from 'react';
import { Welcome } from '../../components/Welcome/'
import { BrowserRouter, Route } from 'react-router-dom';
import DropSubmitForm from '../DropSubmitForm/';

import './App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Welcome} />
          <Route exact path='/DropSubmitForm' component={DropSubmitForm} />


        </div>
      </BrowserRouter>
    );
  }
}
