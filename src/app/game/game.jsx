import React from 'react';
import { useEffect, useState } from "react";
import { InputBlock } from "~/shop_src/modules/hitblow/inputBlock";
import { NumberBlock } from "~/shop_src/modules/hitblow/numberBlock";
import { HitAndBlow } from "~/shop_src/modules/hitblow/hitAndBlow";
import { makeAnswer } from "~/shop_src/modules/hitblow/answer";

// import styled from 'styled-components';
import { Button } from '@chakra-ui/react';


  const HitBlow = () => {
    const [userAnswer, setUserAnswer] = useState(["", "", "", ""]);
    const [correctAnswer, setCollectAnswer] = useState([]);
    const [activeBlock, setActiveBlock] = useState(0);
    const [answerHistories, setAnswerHistories] = useState([]);
    const [isGameReset, setIsGameReset] = useState(false); // 新しいゲームを開始したかどうかを追跡
    const [blockStatus, setBlockStatus] = useState(Array(10).fill('normal'));


    useEffect(() => {
      if (isGameReset) {
        setBlockStatus(Array(10).fill('normal'))
        setCollectAnswer(makeAnswer()); // ゲームリセット時のみ実行
        setIsGameReset(false)
      }
    }, [isGameReset]);

    const startNewGame = () => {
      setUserAnswer(["", "", "", ""]);
      setActiveBlock(0);
      setAnswerHistories([]);
      setIsGameReset(true);
    };

    const onInputAnswer = (num) => {
      setUserAnswer(
        userAnswer.map((answer, index) =>
          index === activeBlock ? num : answer
        )
      );
      if (activeBlock < 3) {
        setActiveBlock(() => activeBlock + 1);
      }
    };

    const onSetActiveBlock = (num) => {
      setActiveBlock(num);
    };

    const onCheckAnswer = () => {
      let hitAndBlow = {
        answer: userAnswer.join(""),
        hit: 0,
        blow: 0
      };
      let checkAnswer = userAnswer.map(element => element.toString());
      let newBlockStatus = Array(10).fill('normal');
      userAnswer.forEach((answer, index) => {
        checkAnswer = userAnswer.map(element => element.toString());
        if (checkAnswer.indexOf(correctAnswer[index]) !== -1) {
          if (correctAnswer[index] == answer) {
            hitAndBlow.hit++;
            newBlockStatus[correctAnswer[index]] = 'hit';
          } else {
            hitAndBlow.blow++;
            newBlockStatus[correctAnswer[index]] = 'blow';
          }
        }
      });
      setBlockStatus(newBlockStatus);
      setAnswerHistories([hitAndBlow, ...answerHistories]);
      setUserAnswer(["", "", "", ""]);
      setActiveBlock(0);
    };

    useEffect(() => {
      startNewGame();
    }, []);

    return (
      <StyledWrapper>
        <Button
          color="primary"
          variant="outlined"
          className="reset-button"
          onClick={startNewGame} >リセットゲーム</Button>
        <InputBlock
          numbers={userAnswer}
          activeBlock={activeBlock}
          setActiveBlock={onSetActiveBlock}
          checkAnswer={onCheckAnswer}
        />
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", marginLeft: "100px" }}>
          <div style={{ width: "30%", marginTop: "5px" }}>
            <NumberBlock
              onInputNumber={onInputAnswer}
              onInputPrev={() => {
                onSetActiveBlock(activeBlock - 1);
              }}
              onInputNext={() => {
                onSetActiveBlock(activeBlock + 1);
              }}
              onInputClear={() => {
                setUserAnswer(["", "", "", ""]);
                setActiveBlock(0);
              }}
              userAnswer={userAnswer}
              blockStatus={blockStatus}
            />
          </div>
          <div>
            <HitAndBlow
              clickNewGame={startNewGame}
              answerHistories={answerHistories}
            />
          </div>
        </div>
      </StyledWrapper>
    );
  }

// export default HitBlow;

const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  text-align: center;
  .reset-game{
    text-align: center;
  }
`