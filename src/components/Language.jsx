/* eslint-disable react/prop-types */
const Language = (props) => {
  console.log(props);
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  return (
    <div style={styles} className="language-box">
      {props.name}
    </div>
  );
};

export default Language;
