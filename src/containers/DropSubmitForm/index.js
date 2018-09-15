import React from 'react';
import './DropSubmitForm.css'
import { Component } from 'react';

export class DropSubmitForm extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: "",
      longitude: "",
      latitude: "",
      codeLog: [0, 0, 0, 0, 0, 0],
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleCode = (e) => {
    const id = e.target.id;
    const entry = e.target.value;
    let codeLog = this.state.codeLog;
    codeLog[id] = entry;
    this.setState({ codeLog })
    this.autotab(e);
  }

  handleDifficulty = (e) => {
    const difficulty = e.target.value;
    this.setState({ difficulty })
  }

  autotab = (e) => {
    const next = e.target.nextElementSibling;
    const previous = e.target.previousElementSibling;
    if (e.target.value.length == e.target.getAttribute("maxlength") && next !== null) {
      next.focus();
    } else if (e.target.value.length === 0) {
      if (previous === null) {
        return
      }
      previous.focus();
    }
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
              <input name="longitude" placeholder="enter coordinates..." type="number" value={this.state.longitude} onChange={this.handleChange} />
            </span>
            <span className="entry-row">
              <h3>Latitude Coordinates</h3>
              <input name="latitude" placeholder="enter coordinates..." type="number" value={this.state.latitude} onChange={this.handleChange} />
            </span>
            <span className="entry-row">
              <h3>Unique Verification Code</h3>
              <div className="unique-code-entry-wrap">
                <input className="code-entry" id="0" placeholder='0' name='uniqueOne' maxLength="1" type="text" value={this.state.uniqueOne} onChange={this.handleCode} />
                <input className="code-entry" id="1" placeholder='0' name="uniqueTwo" maxLength="1" type="text" value={this.state.uniqueTwo} onChange={this.handleCode} />
                <input className="code-entry" id="2" placeholder='0' name="uniqueThree" maxLength="1" type="text" value={this.state.uniqueThree} onChange={this.handleCode} />
                <input className="code-entry" id="3" placeholder='0' name="uniqueFour" maxLength="1" type="text" value={this.state.uniqueFour} onChange={this.handleCode} />
                <input className="code-entry" id="4" placeholder='0' name="uniqueFive" maxLength="1" type="text" value={this.state.uniqueFive} onChange={this.handleCode} />
                <input className="code-entry" id="5" placeholder='0' name="uniqueSix" maxLength="1" type="text" value={this.state.uniqueSix} onChange={this.handleCode} />
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
