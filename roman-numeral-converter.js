//TODO 2 > Roman Numeral Converter
//convert the given number into a roman numeral
function convertToRoman(num) {
  const romanDict = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10,
    IX: 9, V: 5, IV: 4, I: 1
  }
  let romanNum = "";
  //test case : 3999
  for (let i in romanDict){  
    while(num >= romanDict[i]){
      romanNum += i;
      num -= romanDict[i]
    }
  }
  //for let M in romanDict {while (num >= 1000){romanNum += M; num -= 1000}}
  //after loop the while 3 times, num is 999 and < 1000. romanNum = MMM
  //then test the next property in romanDict which is CM. do the same process, and in the end we got MMMCMXCIX
  return romanNum;
}

console.log(convertToRoman(3999));
//return MMMCMXCIX