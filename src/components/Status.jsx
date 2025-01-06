/* eslint-disable react/prop-types */
const Status = (props) => {
  return props.status === 'win' ? (
    <section className="status-container">
      <h1>You Win!</h1>
      <p>Well Done! 🥳</p>
    </section>
  ) : null;
};

export default Status;
