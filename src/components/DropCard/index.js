import React from 'react'

export default (props) => {
  const { note, url } = props
  return (
    <div className="drop-card">
      <h2>{note}</h2>
      <p>{url}</p>
    </div>
  )
}
