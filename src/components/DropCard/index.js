import React from 'react'
import './DropCard.css'

export default (props) => {
  const { note } = props
  const image = props.image.original.url;
  return (
    <div className="drop-card">
      <img src={image} alt="drop-map-location" className="drop-image" />
      <p>{note}</p>
    </div>
  )
}
