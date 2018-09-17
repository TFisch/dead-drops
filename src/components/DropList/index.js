import React from 'react'
import { DropCard } from '../DropCard'
import './DropList.css'

export const DropList = (props) => {
  const displayPins = props.retrievedBoard.map(pin => <DropCard {...pin} />);
  return (
    <div className='drop-list'>
      {displayPins}
    </div>
  )
}
