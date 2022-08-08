import { useState, useEffect } from "react";

function Button({ text, count, index, onClickHandler, name, selectedIndex }) {
  const [bgColor, setBgColor] = useState("");
  const getPlanetColor = (name) => {
    switch (name.toLowerCase()) {
      case "mercury":
        setBgColor("bg-mercury");
        break;
      case "venus":
        setBgColor("bg-venus");
        break;
      case "earth":
        setBgColor("bg-earth");
        break;
      case "mars":
        setBgColor("bg-mars");
        break;
      case "jupiter":
        setBgColor("bg-jupiter");
        break;
      case "saturn":
        setBgColor("bg-saturn");
        break;
      case "uranus":
        setBgColor("bg-uranus");
        break;
      case "neptune":
        setBgColor("bg-neptune");
        break;
    }
  };

  const handleClick = () => {
    onClickHandler(index);
  };

  useEffect(() => {
    getPlanetColor(name);
  }, [name]);

  return (
    <button
      className={`${
        selectedIndex === index ? `btn-active ${bgColor} ` : "btn"
      }  text-left`}
      onClick={handleClick}
    >
      <span className="text-white opacity-60 mr-4">{count}</span>
      <span className="uppercase text-white">{text}</span>
    </button>
  );
}

export default Button;
