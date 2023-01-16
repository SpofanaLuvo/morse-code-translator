const morseCodeDictionary = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  " ": " / ",
};

function assert(inputString, outputString) {
  let inputSpaceCounter = 0,
    inputCharacterCounter = 0,
    outputSpaceCounter = 0,
    outputCharacterCounter = 0;

  const splitOutput = outputString.split(" ");

  for (let j = 0; j < splitOutput.length; j++) {
    if (splitOutput[j] === "/") {
      outputSpaceCounter++;
    } else if (splitOutput[j] !== "") {
      outputCharacterCounter++;
    }
    if (inputString[j] === undefined) {
      continue;
    } else if (inputString[j] === " ") {
      inputSpaceCounter++;
    } else {
      inputCharacterCounter++;
    }
  }

  console.assert(
    inputSpaceCounter === outputSpaceCounter,
    "The output does not have the correct number of whitespaces represented."
  );
  console.assert(
    inputCharacterCounter === outputCharacterCounter,
    "The output and input do not have the same number of characters represented."
  );
}

Object.prototype.getKeyByValue = function (value) {
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value) return prop;
    }
  }
};

function morseCodeToLetters(morseCode) {
  const decoded = morseCode
    .split(" / ")
    .map((word) =>
      word
        .split(" ")
        .map((code) => morseCodeDictionary.getKeyByValue(code))
        .join("")
    )
    .join(" ");

  assert(decoded, morseCode);

  return decoded;
}

function lettersToMorseCode(text) {
  const encoded = text
    .toUpperCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) => morseCodeDictionary[letter])
        .join(" ")
    )
    .join(" / ");

  assert(text, encoded);

  return encoded;
}

console.log(morseCodeToLetters(" / "));
console.log(lettersToMorseCode("Hi Luvo"));
