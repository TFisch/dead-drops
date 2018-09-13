import React from 'react'
import DropCard from '../DropCard'

export const DropList = (props) => {
  const displayPins = props.retrievedBoard.map(pin => <DropCard note={pin.note} image={pin.image.original.url} />);
  return (
    <div className='drop-list'>
      {displayPins}
    </div>
  )
}
