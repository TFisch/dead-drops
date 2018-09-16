import React from 'react'
import './DropCard.css'

export default (props) => {
  const { note } = props
  return (
    <div className="drop-card">
      <p>{note}</p>
    </div>
  )
}
