import React, { Component } from 'react';

export class DropSubmitForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="drop-submit">
        <div className="form">
          <input name="difficulty" placeholder="difficulty" type="text" />
          <input name="north-coord" placeholder="north coordinates" type="text" />
          <input name="west-coord" placeholder="west coordinates" type="text" />
          <input name="code" placeholder="Unique Verification Code" type="text" />
          <button>SUBMIT</button>
        </div>
      </div>
    )
  }
}

