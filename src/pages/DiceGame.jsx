import { useState, useEffect } from 'react';
import Die from '../components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './DiceGame.css';

export default function DiceGame() {
  const [dice, setDice] = useState(allNewDice());
  const [win, setWin] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setWin(true);
    }
  }, [dice]);

  // using function instead of const to utilize hoisting
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    };
  }

  // using function instead of const to utilize hoisting
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  const rollDice = () => {
    if (!win) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setWin(false);
      setDice(allNewDice());
    }
  };

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ));

  return (
    <section className="DiceGame">
      {win && <Confetti />}
      <h1 className="section__title section__title--dice-game">DICE GAME</h1>
      <p className="instructions">
        Roll until all dice are the same.
        <br />
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {win ? 'New Game' : 'Roll'}
      </button>
    </section>
  );
}
