//TODO 3 > CAESARS CIPHER
//Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
function rot13(str) {
  let strArr = [];
  for (let i=0; i<str.length; i++){
    if(str.charCodeAt(i)<65 || str.charCodeAt(i)>90){
      strArr.push(str[i]);
    }
    if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=77){
      strArr.push(String.fromCharCode(str.charCodeAt(i)+13));
    }
    if(str.charCodeAt(i)>=78&&str.charCodeAt(i)<=90){
      strArr.push(String.fromCharCode(str.charCodeAt(i)-13));
    }
  }

  return strArr.join("");
}

console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP