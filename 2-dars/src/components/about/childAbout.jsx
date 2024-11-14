import PropTypes from "prop-types";

const ChildAbout = ({ name = "Baxtiyor", age, isActive }) => {
  return (
    <div>
      <h1>Your name {name}</h1>
      <p>Your age{2024 - age}</p>
      <p>{isActive && "Active"}</p>
    </div>
  );
};
ChildAbout.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isActive: PropTypes.bool, // bool => boolean
};
// ChildAbout.defaultProps = {
//   name: "Baxtiyor",
// };
export default ChildAbout;
