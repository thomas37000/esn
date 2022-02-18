import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css'; déjà appelé dans le parent

const CardSkeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <div className="card-container">
      <div className={classes}></div>
    </div>
  );
};

CardSkeleton.propTypes = {
  // type: PropTypes.element,
  type: PropTypes.string.isRequired,
};

export default CardSkeleton;
