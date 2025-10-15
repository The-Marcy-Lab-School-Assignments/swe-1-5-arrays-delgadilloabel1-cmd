const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (string) => {
  const array = string.split("")
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
  arr.splice(middleOfIndex, 1)
};

const isRightIndex = (arr, value, index) => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
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
