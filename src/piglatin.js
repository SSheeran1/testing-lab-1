const translate = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let lowercaseWord = word.toLowerCase();
  let wordArray = lowercaseWord.split("");
  if (vowels.includes(lowercaseWord[0])) {
    return lowercaseWord + "way";
  } else if (vowels.includes(lowercaseWord[1])) {
    const newWord = [
      ...wordArray.slice(1, wordArray.length),
      wordArray[0],
      "ay",
    ];
    return newWord.join("");
  } else if (vowels.includes(lowercaseWord[2])) {
    const newWord = [
      ...wordArray.slice(2, wordArray.length),
      wordArray[0],
      wordArray[1],
      "ay",
    ];
    return newWord.join("");
  } else if (vowels.includes(lowercaseWord[3])) {
    const newWord = [
      ...wordArray.slice(3, wordArray.length),
      wordArray[0],
      wordArray[1],
      wordArray[2],
      "ay",
    ];
    return newWord.join("");
  } else {
    const newWord = [
      ...wordArray.slice(4, wordArray.length),
      wordArray[0],
      wordArray[1],
      wordArray[2],
      wordArray[3],
      "ay",
    ];
    return newWord.join("");
  }
};

module.exports = { translate };
