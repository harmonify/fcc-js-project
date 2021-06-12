//TODO 1 > PALINDROME CHECKER
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
function palindrome(str) {
  let regex = /[\W^_]/g;  //match all non-alphanumeric characters
  let newStr = str        //filter all non-alphanumeric characters and lowercase it
  .replace(regex, "")
  .toLowerCase();
  let strArr = [...newStr]; //split the string to an array

  for (let i=0; i<strArr.length; i++){
    for (let j=0; j<strArr.length; j++){
      if (strArr[i] != strArr[strArr.length-i-1]){ 
      //ex: if strArr[0] != strArr[strArr.length-0-1]
      //(nb: strArr.length-1 is the last char)
        return false;
      }
    }
  }
  //else 
  return true;
}

console.log(palindrome("_eye"));  //eye, true
console.log(palindrome("race car"));  //racecar, true
console.log(palindrome("A man, a plan, a canal. Panama")); //amanaplanacanalpanama, true