
import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

const Buttons = ({ val, filter }) => {
  return (
    <div className="buttons">
      {val &&
        val.map((techno, id) => {
          return (
            <button
              type="button"
              onClick={() => filter(techno)}
              className="btn-technos"
              key={id}
            >
              {techno}
            </button>
          );
        })}
    </div>
  );
};

Buttons.propTypes = {
  val: PropTypes.array.isRequired,
};

export default Buttons;