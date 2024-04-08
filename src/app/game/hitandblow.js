import React,{ useEffect, useState } from "react";
import { Button } from '@chakra-ui/react';

export const HitAndBlow = (props) => {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (props.answerHistories.length > 0) {
      setIsCorrect(() => {
        if (props.answerHistories[0].hit === 4) {
          return true;
        }
        return false;
      });
    } else {
      setIsCorrect(false);
    }
  }, [props]);

  return (
    <>
      <div
        style={{
          width: "200px",
          color: "#FA7482",
          fontSize: "30px",
          fontWeight: "bold",
          margin: "10px"
        }}
      >
        {isCorrect && "おめでとう"}
      </div>
      {isCorrect && 
      <Button 
        color="default"
        variant="outlined"
        onClick={props.clickNewGame}
        style={{margin: "20px auto"}}>
          もう一度する</Button>}
      <div>
        {props.answerHistories.map((history, index) => {
          return (
            <div key={index}>
              Answer: {history.answer} Hit: {history.hit} Blow: {history.blow}
            </div>
          );
        })}
      </div>
    </>
  );
};
