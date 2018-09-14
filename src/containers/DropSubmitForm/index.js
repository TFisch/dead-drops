import React from 'react';
import './DropSubmitForm.css'
import { Component } from 'react';

export class DropSubmitForm extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: "",
      longitude: 0,
      latitude: 0,
      uniqueCode: 0
    }
  }

  handleChange = () => {

  }

  handleDifficulty = (e) => {
    const difficulty = e.target.value;
    this.setState({ difficulty })
  }

  sendCoordinates = (e) => {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <form className="drop-submit" onSubmit={(e) => this.sendCoordinates(e)}>
          <div className="drop-form">
            <span className="entry-row">
              <h3>Difficulty</h3>
              <select name="difficulty" onChange={(e) => this.handleDifficulty(e)}>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="Hard">Hard</option>
              </select>
            </span>
            <span className="entry-row">
              <h3>Longitude Coordinates</h3>
              <input name="north-coord" placeholder="north coordinates" type="text" onChange={this.handleChange} />
            </span>
            <span className="entry-row">
              <h3>Latitude Coordinates</h3>
              <input name="west-coord" placeholder="west coordinates" type="text" onChange={this.handleChange} />
            </span>
            <span className="entry-row">
              <h3>Unique Verification Code</h3>
              <div className="unique-code-entry-wrap">
                <input className="code-entry" name="unique-one" maxlength="1" type="text" />
                <input className="code-entry" name="unique-two" maxlength="1" type="text" />
                <input className="code-entry" name="unique-three" maxlength="1" type="text" />
                <input className="code-entry" name="unique-four" maxlength="1" type="text" />
                <input className="code-entry" name="unique-five" maxlength="1" type="text" />
                <input className="code-entry" name="unique-six" maxlength="1" type="text" />
              </div>
            </span>
            <span className="button-row">
              <button className="submit-button form-row">SUBMIT</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
