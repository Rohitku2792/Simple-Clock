function Time() {
  let currTime = new Date();
  let date = new Date();
  return (
    <>
      <h3 className="text-center">
        This is the current Time:{" "}
        <span className="danger">{currTime.toLocaleTimeString()}</span> And{" "}
        <br />
        Date: {date.toLocaleDateString()}
      </h3>
    </>
  );
}
export default Time;
