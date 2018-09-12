import React from 'react';
import './DropSubmitForm.css'

export const DropSubmitForm = () => {
  return (
    <div>
      <div className="drop-submit">
        <div className="drop-form">
          <span className="entry-row">
            <h3>Difficulty</h3>
            <select name="difficulty">
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="Hard">Hard</option>
            </select>
          </span>
          <span className="entry-row">
            <h3>Northern Coordinates</h3>
            <input name="north-coord" placeholder="north coordinates" type="text" />
          </span>
          <span className="entry-row">
            <h3>Western Coordinates</h3>
            <input name="west-coord" placeholder="west coordinates" type="text" />
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
      </div>
    </div>
  )
}
