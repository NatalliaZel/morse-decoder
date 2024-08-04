const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let commonArray = [];

  const arrayWithSplitString = expr.split("**********");

  for (let item of arrayWithSplitString) {
    let arrayByTenChars = [];
    for (let i = 0; i < item.length; ) {
      arrayByTenChars.push(item.split("", 10).join(""));
      if (item.length >= 10) {
        item = item.slice(10);
      }
    }
    commonArray.push(arrayByTenChars);
  }

  let cleanChar = "";
  let cleanArray = [];
  let cleanCommonArray = [];

  for (let item of commonArray) {
    cleanArray = [];
    for (let element of item) {
      cleanChar = "";
      for (let i = 0; i < element.length; i += 2) {
        if (+element[i] === 1 && +element[i + 1] === 0) {
          cleanChar = cleanChar + ".";
        } else if (+element[i] === 1 && +element[i + 1] === 1) {
          cleanChar = cleanChar + "-";
        }
      }
      cleanArray.push(cleanChar);
    }
    cleanCommonArray.push(cleanArray);
  }

  let regularChar = "";
  let arrayOfRegularChars = [];
  let commonArrayOfRegularChars = [];

  for (let item of cleanCommonArray) {
    arrayOfRegularChars = [];
    for (let element of item) {
      regularChar = MORSE_TABLE[element];
      arrayOfRegularChars.push(regularChar);
    }
    commonArrayOfRegularChars.push(arrayOfRegularChars);
  }

  return commonArrayOfRegularChars.map((el) => el.join("")).join(" ");
}

module.exports = {
  decode,
};
