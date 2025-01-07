/* eslint-disable react/prop-types */
const Language = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  return (
    <div style={styles} className={props.className}>
      {props.name}
    </div>
  );
};

export default Language;
