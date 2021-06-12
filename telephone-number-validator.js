//TODO 4 > Telephone Number Validator
//Return true if the passed string is a valid US phone number. The area code is required. If the country code is provided, you must confirm that the country code is 1
/* Examples of valid formats for US Numbers :
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
*/
function telephoneCheck(str) {
  const regex = /^[1]?[\s]?(?:[0-9]{3}|\([0-9]{3}\))[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("1 555 555-5559")); //return true
console.log(telephoneCheck("555)-555-5555"));  //return false