import React from "react";

export const NumberBlock = (props) => {
  const numberAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const wrapper = {
    display: "flex",
    flexWrap: "wrap",
    width: "200px"
  };
  const item = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    padding: "5px",
    cursor: "pointer"
  };
  const hitItem = {
    ...item,
    backgroundColor: '#B3DE69',
  };
  
  const blowItem = {
    ...item,
    backgroundColor: '#FFF27B',
  };  
  const selectedItem = {
    ...item,
    backgroundColor: "gray",
    pointerEvents: "none"
  };
  return (
    <div style={wrapper}>
      <div style={item} onClick={() => props.onInputPrev()}>
        ←
      </div>
      <div style={item} onClick={() => props.onInputNext()}>
        →
      </div>
      <div style={item} onClick={() => props.onInputClear()}>
        C
      </div>
      {numberAry.map((num, index) => {
        const blockStyle = props.blockStatus[num] === 'normal' ? item : props.blockStatus[num] === 'hit' ? hitItem : blowItem;
        return (
          <div
            key={index}
            style={props.userAnswer.includes(String(num)) ? selectedItem : blockStyle}
            onClick={() => {
              props.onInputNumber(num);
            }}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};