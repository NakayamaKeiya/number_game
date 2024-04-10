export const makeAnswer = () => {
    const fourDigitNumber = [];
    console.log(fourDigitNumber)
    while (fourDigitNumber.length < 4) {
      const number = String(Math.floor(Math.random() * 10));
  
      if (!fourDigitNumber.includes(number)) {
        fourDigitNumber.push(number);
      }
    }
    return fourDigitNumber;
  };