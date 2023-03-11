const getRepeats = (data) => {
    let result = {};
    for (let elem of data) {
      if (!result[elem]) {
        result[elem] = 1;
      }
      else {
        result[elem]++;
      }
    }
    return result;
  }
  console.log(getRepeats(["Василий", "Пётр", "Иннокентий", "Пётр", "Иван", "Василий"]));