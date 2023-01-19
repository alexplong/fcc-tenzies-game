/** @format */

import React from "react";

function Main() {
  let win = false;
  const [tenDice, setTenDice] = React.useState([
    { id: "1", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "2", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "3", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "4", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "5", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    { id: "6", roll: Math.floor(Math.random() * 6) + 1, selected: false },
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
        value={die.roll}
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

  function handleRoll() {
    setTenDice((prevDices) => {
      return prevDices.map((die) => {
        return !die.selected
          ? { ...die, roll: Math.floor(Math.random() * 6) + 1 }
          : die;
      });
    });
  }

  function resetGame() {
    setTenDice([
      { id: "1", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "2", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "3", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "4", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "5", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "6", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "7", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "8", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "9", roll: Math.floor(Math.random() * 6) + 1, selected: false },
      { id: "10", roll: Math.floor(Math.random() * 6) + 1, selected: false },
    ]);
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
          <div className="dice_wrapper">{diceElements}</div>
          {!win ? (
            <button className="roll_button" onClick={handleRoll}>
              Roll
            </button>
          ) : (
            <button className="roll_button" onClick={resetGame}>
              Reset Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
