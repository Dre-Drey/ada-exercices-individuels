/*function isValideDate(str) {
  const maDate = new Date(str);
  return maDate.toLocaleDateString("fr");
}
console.log(isValideDate("12/14/2021"));
console.log(typeof isValideDate("12/12/2021"));*/

function isValideDate(str) {
  let isValidDate = Date.parse(str);
  if (isNaN(isValidDate)) {
    return "This is not a valid date format.";
  } else {
    return "This is a valid date format.";
  }
}
console.log(isValideDate);

/*function isValidDate(str){
    let validDate = Date.parse(str);
    if (isNaN(validDate)) {
        console.log("Not a valid date format");
    }
    else {
        console.log("Valid date format")
    }
}

isValidDate("53/53/2019")*/

/*function isValidDate(str) {
    let maDate = new Date(str);
    if (maDate == maDate.toLocaleDateString("fr")){
        return true;
    } else{
        return false;
    };

}
console.log(isValidDate("12/12/2011"));*/

function isValidDate(str) {
  var date_regex =
    /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
  if (date_regex.test(str)) {
    return "Date follows dd/mm/yyyy format";
  } else {
    return "Invalid date format";
  }
}
console.log(isValidDate("21/11/2021"));

function isPalindrom(str) {
  let strReplace = str.replaceAll("/", "");
  const taille = strReplace.length;
  for (let i = 0; i < taille / 2; i++) {
    if (strReplace[i] !== strReplace[taille - 1 - i]) {
      return "It's not a palindrome";
    } else {
      return "it is a palidrome";
    }
  }
}

console.log(isPalindrom("12/02/2022"));

function isPalindrom2(dateString) {
  //dateString = 24/01/2009
  let newDate = dateString.replaceAll("/", ""); // = 24012009
  let newDateArray = newDate.split(""); // = ['2','4','0']
  console.log("newDateArray= ", newDateArray);
  let newDateArrayReverse = newDateArray.reverse(); // = ['9','0','0']
  console.log("newDateArrayReverse= ", newDateArrayReverse);
  let newDateString = newDateArray.join("");
  console.log(newDateString);
  let newDateStringReverse = newDateArrayReverse.join("");
  console.log(newDateStringReverse);
  if (newDateString !== newDateStringReverse) {
    return "Not a palindrom";
  } else {
    return "Palindrom";
  }
}
console.log(isPalindrom2("24/01/2009"));
