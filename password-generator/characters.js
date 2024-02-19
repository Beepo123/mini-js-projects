// array containing all alphabet characters
// lowercase and uppercase
const alphabet = [...Array(26)]
  .map((_, i) => String.fromCharCode(97 + i))
  .concat([...Array(26)].map((_, i) => String.fromCharCode(65 + i)));

// Array containing numbers from 0 to 9
const numbers = [...Array(10)].map((_, i) => i);

// Array containing special characters
const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ";",
  ":",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
  "`",
  "~",
];
