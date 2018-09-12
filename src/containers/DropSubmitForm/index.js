import React from 'react';
import './DropSubmitForm.css'

export const DropSubmitForm = () => {
  return (
    <div>
      <div className="drop-submit">
        <div className="drop-form">
          <input name="difficulty" placeholder="difficulty" type="text" />
          <input name="north-coord" placeholder="north coordinates" type="text" />
          <input name="west-coord" placeholder="west coordinates" type="text" />
          <input name="code-entry" maxlength="1" placeholder="Unique Verification Code" type="text" />
          <button className="submit-button form-row">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}
