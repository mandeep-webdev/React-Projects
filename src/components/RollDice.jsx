import React from "react";
import { useState } from "react";
import styled from "styled-components";
const RollDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);
    console.log(currentDice);
  };
  return (
    <DiceContainer>
      <img
        src={`../../public/images/dices/dice_${currentDice}.png`}
        alt="dice"
        onClick={generateRandomNumber}
      />
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;