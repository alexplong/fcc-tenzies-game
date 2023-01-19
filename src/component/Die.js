/** @format */

import React from "react";

function Die(props) {
  return (
    <div
      id={props.die.id}
      className={props.die.selected ? "dice selected" : "dice"}
      onClick={props.handleClick}
    >
      <h2 className="dice--number">{props.value}</h2>
    </div>
  );
}

export default Die;
