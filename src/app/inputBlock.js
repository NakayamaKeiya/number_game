import React from "react";
import { Button } from '@chakra-ui/react';


export const InputBlock = (props) => {
  const numWrapper = {
    display: "flex",
    justifyContent: "center",
    margin: "40px auto"
  };
  const numBlock = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    cursor: "pointer"
  };

  const checkFilledAnswer = () => {
    return props.numbers.some((num) => num === "");
  };
  return (
    <div style={numWrapper}>
      {props.numbers.map((num, index) => {
        return (
          <div
            style={{
              ...numBlock,
              backgroundColor: props.activeBlock === index ? "lightblue" : "initial"
            }}
            key={index}
            onClick={() => props.setActiveBlock(index)}
          >
            {num}
          </div>
        );
      })}
      {!checkFilledAnswer() && (
        <Button
        color="white"
        backgroundColor="tomato"           
        variant="outlined"
        className="reset-button"
        onClick={props.checkAnswer} 
        style={{ marginLeft: "10px" }}>
          回答！
        </Button>
      )}
    </div>
  );
};