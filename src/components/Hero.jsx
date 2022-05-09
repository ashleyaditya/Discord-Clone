import "../styles/Hero.css";
import Button from "./Button";
import bg2 from "../assets/bg2.svg";
import bg3 from "../assets/bg3.svg";
const Hero = () => {
  return (
    <>
      <div className="heroContainer flex justify-center">
        <div className="heroText">
          <div>
            <h1 className=" mb-12"> Imagine a place...</h1>
          </div>

          <div>
            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </div>
          <br />
          <div className="mt-12 flex justify-around">
            <Button
              message="Download for windows"
              bgColor="white"
              color="black"
            />
            <Button
              message="Open Discord in your browser"
              bgColor="black"
              color="white"
            />
          </div>
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <img className="bgRight" src={bg2}></img>
          <img className="bgLeft" src={bg3}></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
