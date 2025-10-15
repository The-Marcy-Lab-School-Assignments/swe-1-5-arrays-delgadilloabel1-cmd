const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (string) => {
  const array = string.split("");
  return array.reverse().join("");
};

const newArrayFullOf = (value, numOfValue) => {
  const newArray = new Array(numOfValue);
  return newArray.fill(value);
};

const insertIntoMiddle = (arr, value) => {
  const middleOfIndex = Math.floor(arr.length / 2);
  arr.splice(middleOfIndex, 0, value);

};

const deleteFromMiddle = (arr) => {
  const middleOfIndex = Math.floor(arr.length / 2);
  arr.splice(middleOfIndex, 1);
};

const isRightIndex = (arr, value, index) => {
  if (value === arr[index]) {
    return true;
  } else {
    return false;
  }
};

const roundAllNumsDown = (arr) => {
  const newArray = [...arr];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = Math.floor(newArray[i])
  }
  return newArray
};

const getAllYCoordinates = (arrOfCoords) => {
  const newArray = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArray.push(arrOfCoords[i][1]);
  }
  return newArray
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
