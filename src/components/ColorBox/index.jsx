// rsfp
import React, { useState } from "react";
import "./ColorBox.scss";
// import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeplink";
    console.log(initColor);

    return initColor;
  });

  function changeColor() {
    // get random Color -> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  return (
    // inline style
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
