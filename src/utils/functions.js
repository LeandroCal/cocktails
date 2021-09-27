export const joinPairing = (arr) => {
  let counter = 0;
  if (arr.length === 0) {
    return "";
  } else {
    return arr.reduce((accumulator, item) => {
      if (counter === arr.length - 1) {
        return accumulator + item;
      } else {
        counter += 1;
        return `${accumulator} ${item} ${
          counter === arr.length - 1 ? "y " : ", "
        }`;
      }
    }, "");
  }
};
