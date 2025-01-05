/* eslint-disable react/prop-types */
const Letter = (props) => {
  return <span className="character">{props.char.toUpperCase()}</span>;
};

export default Letter;
