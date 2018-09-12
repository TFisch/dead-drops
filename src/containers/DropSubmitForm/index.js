import React from 'react'

export const DropSubmitForm = () => {
  return (
    <div>
      <div className="drop-submit">
        <div className="form">
          <input name="difficulty" placeholder="difficulty" type="text" />
          <input name="north-coord" placeholder="north coordinates" type="text" />
          <input name="west-coord" placeholder="west coordinates" type="text" />
          <input name="code" placeholder="Unique Verification Code" type="text" />
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}
