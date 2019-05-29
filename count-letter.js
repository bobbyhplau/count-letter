function countLetters(str) {
  var str = str.split(" ").join("");

  var obj = {}

  for (var i = 0; i < str.length; i++) {

    letter = str.charAt(i);

    if (!(obj[letter])) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));