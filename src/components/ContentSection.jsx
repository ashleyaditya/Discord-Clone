import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img2.svg";
import img4 from "../assets/img4.svg";
import Button from "./Button";
import Content from "./Content";

const ContentSection = () => {
  return (
    <>
      <Content
        img={img1}
        heading={"Create an invite-only place where you belong"}
        paragraph={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
      />
      <Content
        img={img2}
        heading={"Where hanging out is easy"}
        paragraph={
          "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
        }
        direction={"row-reverse"}
      />
      <Content
        img={img3}
        heading={"From few to a fandom"}
        paragraph={
          "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        }
      />
      {/* ----------------------------------------------------- */}
      <div className="flex align-center flex-column">
        <div className="width800 text-center">
          <h1 className="font-46">RELIABLE TECH FOR STAYING CLOSE</h1>
          <p>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div>
          <img src={img4} />
        </div>
        <div className="flex flex-column align-center">
          <h1 className="mb-24">Ready to start your journey</h1>

          <Button
            message="Download for windows"
            bgColor="#404eed"
            color="white"
          />
        </div>
      </div>
    </>
  );
};

export default ContentSection;
