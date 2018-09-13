import React from 'react'
import './DropCard.css'

export default (props) => {
  const { note, image } = props
  return (
    <div className="drop-card">
      <img src={image} alt="drop-map-location" className="drop-image" />
      <p>{note}</p>
    </div>
  )
}
