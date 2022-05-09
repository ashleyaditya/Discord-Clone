import "../styles/Button.css";
const Button = ({ message, bgColor = "white", color = "black" }) => {
  console.log(bgColor, color);
  return (
    <>
      <button
        className="btn-component"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        {message}
      </button>
    </>
  );
};

export default Button;
