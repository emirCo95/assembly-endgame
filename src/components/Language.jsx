const Language = (props) => {
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
