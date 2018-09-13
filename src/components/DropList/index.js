import React from 'react'
import DropCard from '../DropCard'

export const DropList = (props) => {
  const displayPins = props.retrievedBoard.map(pin => <DropCard note={pin.note} />);
  return (
    <div className='drop-list'>
      {displayPins}
    </div>
  )
}
