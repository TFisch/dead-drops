import React from 'react';
import { DropCard } from '../DropCard';
import './DropList.css';
import PropTypes from 'prop-types';

export const DropList = (props) => {
  const displayPins = props.retrievedBoard.map((pin, index) => <DropCard {...pin} key={index} />);
  return (
    <div className='drop-list'>
      {displayPins}
    </div>
  );
};

DropList.propTypes = {
  retrieveBoard: PropTypes.array,
  retrievedBoard: PropTypes.boolean
};