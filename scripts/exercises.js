(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

    function max(num1, num2) {
        var result;
    if (num1 > num2) {
      result = num1
    } else {
      result = num2
    }
    return result;
  }


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree(num1, num2, num3){
  var result;
  if (num1 > num2 && num1 > num3) {
    result = num1
  } else if (num2 > num3) {
    result = num2
  } else {
    result = num3
  }
return result
}

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(char) {
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    return true
  } else {
    return false
  }
}


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(str){
    var name = []
    var name = Array.from(str);
    var newstr = [];
    for (var i = 0; i < str.length; i++) {
    if  (name[i] != 'a' || name[i] != 'e' || name[i] != 'i'|| name[i] != 'o' || name[i] != 'u') {
      newstr = name[i] + "o" + name[i];
      console.log(newstr);
    } else {
      console.log("vowel");
    }
  } return newstr.toString();
  }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
function sum(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++){
    total += arr[i];
  } return total
}

function multiply(array) {
  var total = array[0]
  for (var i = 0; i < array.length; i++){
    total *= array[i]
  } return total
}


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

function reverse(str) {
  var total = [];
  for (var i = str.length - 1; i > -1; i--){
    total += str[i];
  } return total
}

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

function findLongestWord(str) {
  var length = str[0].length
  for (var i = 0; i < str.length; i++) {
    if (length > str[i].length) {
      length = length;
    } else {
      length = str[i].length
    }console.log(length);
  } return length
}

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

function filterLongWords(arr, i) {
  var length = i
  var word = [];
  for (var j = 0; j < arr.length; j++) {
    if (length < arr[j].length) {
      word.push(arr[j]);
    }
  } return word
}

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
function charFreq(str) {
  var counta = 0
  var countb = 0
  var countc = 0
  var countd = 0
  var char = ""

  for (var i = 0; i > str.length; i++) {
    char = str[i];
    for (var j = 0; j > str.length; j++){
      if (char == str[j] && char == 'a'){
        counta++
        str.splice(j, 1);
      } else if (char == str[j] && char == 'b'){
        countb++
        str.splice(j, 1);
        } else if (char == str[j] && char == 'c'){
          countc++
          str.splice(j, 1);
      } else if (char == str[j] && char == 'd'){
        countd++
        str.splice(j, 1);
    }
  }console.log(counta, countb, countc, countd)
}
  //  var obj {
  //   a: counta
  //   b: countb
  //   c: countc
  //   d: countd
  // } return obj
}


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  // console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
