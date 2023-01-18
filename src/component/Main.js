/** @format */

import React from "react";

function Main() {
  const [tenDice, setTenDice] = React.useState([
    { id: "1", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "2", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "3", roll: Math.floor(Math.random() * 6) + 1, selected: true },
    { id: "4", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "5", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "6", roll: Math.floor(Math.random() * 6) + 1, selected: true },
    { id: "7", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "8", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "9", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "10", roll: Math.floor(Math.random() * 6) + 1, selected: false },
  ]);

  const diceElements = tenDice.map((die) => {
    return (
      <div
        key={die.id}
        id={die.id}
        className={die.selected ? "dice selected" : "dice"}
        onClick={(event) => handleClick(event)}
      >
        {die.roll}
      </div>
    );
  });

  function handleClick(event) {
    const { id } = event.target;
    setTenDice((prevDices) => {
      return prevDices.map((die) => {
        return die.id === id ? { ...die, selected: !die.selected } : die;
      });
    });
  }

  return (
    <div>
      <div className="outer--container">
        <div className="inner--container">
          <br />
          <br />
          <div className="text_wrapper">
            <h1 className="title">Tenzies</h1>
          </div>
          <div className="subtitle_wrapper">
            <h3 className="subtitle">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </h3>
          </div>
          <br />
          <br />
          <div className="dice_wrapper">{diceElements}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
