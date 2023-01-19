/** @format */
import { nanoid } from "nanoid";

const diceSet = [
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
  { id: nanoid(), roll: Math.floor(Math.random() * 6) + 1, selected: false },
];

export { diceSet };
