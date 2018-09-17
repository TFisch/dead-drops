import React from 'react'
import './DropCard.css'

export const DropCard = (props) => {
  const { note } = props
  return (
    <div className="drop-card">
      <p>{note}</p>
    </div>
  )
}
