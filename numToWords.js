var ONE_TO_NINETEEN = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen"
];

var TENS = [
  "ten", "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];

var SCALES = ["thousand", "million", "billion", "trillion"];

// helper function for use with Array.filter
function isTruthy(item) {
  return !!item;
}

//divides input into chunks of 3
function divide(input) {
  var thousands = [];

  while(input > 0) {
    thousands.push(input % 1000);
    input = Math.floor(input / 1000);
  }

  return thousands;
}

// converts number to words
function numToWords(input) {
  var thousands, hundreds, tens, ones, words = [];

  if(input < 20) {
    return ONE_TO_NINETEEN[input - 1]; // may be undefined
  }

  if(input < 100) {
    ones = input % 10;
    tens = Math.floor(input / 10);

    words.push(TENS[tens - 1]);
    words.push(inEnglish(ones));

    return words.filter(isTruthy).join("-");
  }

  hundreds = iMath.floor(input / 100);
  words.push(inEnglish(hundreds));
  words.push("hundred");
  words.push(inEnglish(input % 100));

  return words.filter(isTruthy).join(" ");
}

// append the word for a scale. Made for use with Array.map
function appendScale(num, exp) {
  var scale;
  if(!num) {
    return null;
  }
  scale = SCALES[exp - 1];
  return [num, scale].filter(isTruthy).join(" ");
}
