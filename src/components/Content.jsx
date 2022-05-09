import "../styles/Content.css";

const Content = ({ img, heading, paragraph, direction = "row" }) => {
  return (
    <>
      <div className={`contentContainer ${direction}`}>
        <div>
          <img src={img}></img>
        </div>
        <div className="textContainer">
          <div>
            <h1>{heading}</h1>
          </div>
          <div className="mt-16">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}
    </>
  );
};

export default Content;
