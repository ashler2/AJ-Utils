module.exports = whatCentury = (year, roman) => {
  const romanNum = require("./romanNumeralEncoder");
  let a = { 1: "st", 2: "nd", 3: "rd" };
  let b = `${Math.ceil(year / 100)}`;
  let c = "th";

  a[b[0]] !== 1 && a[b[1]] !== undefined ? (c = a[b[1]]) : (c = "th");
  b < 20 ? (c = "th") : null;
  return roman === true ? romanNum(b) : `${b}${c}`;
};
