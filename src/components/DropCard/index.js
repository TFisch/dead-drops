import React from 'react';
import './DropCard.css';
import PropTypes from 'prop-types'

export const DropCard = (props) => {
  const { note } = props;
  return (
    <div className="drop-card">
      <img className="drop-icon" src={require('../../utilities/images/treasure.svg')} alt="treasure-icon" />
      <p>{note}</p>
    </div>
  );
};

DropCard.propTypes = {
  note: PropTypes.object,

};