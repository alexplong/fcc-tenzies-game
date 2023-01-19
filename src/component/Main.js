/** @format */

import React from "react";
import { diceSet } from "../diceSet";
// import { nanoid } from "nanoid";
import Die from "./Die";

function Main() {
  const [win, setWin] = React.useState(false);
  const [tenDice, setTenDice] = React.useState(() => diceSet);

  const diceElements = tenDice.map((die) => {
    return (
      <Die die={die} key={die.id} value={die.roll} handleClick={handleClick} />
    );
  });

  React.useEffect(() => {
    let winCheck = tenDice.every((dice) => {
      return dice.roll === tenDice[0].roll && dice.selected === true;
    });
    if (winCheck) {
      setWin(true);
    }
  }, [tenDice]);

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
    setTenDice(diceSet);
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
