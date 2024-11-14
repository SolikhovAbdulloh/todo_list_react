import React from "react";
import PropTypes from "prop-types";
function Child({ name, age, isActive }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isActive}</h1>
    </div>
  );
}
Child.propTypes = {
  name: PropTypes.string,  //probtypes orqali type aniq beriladi
  age: PropTypes.number,
  isActive: PropTypes.bool,
};

export default Child;
