const arrayElement = [
  "Harry",
  "Tom",
  "Kaustav",
  "Tom",
  "Kaustav",
  "Gourav",
  "Kaustav",
  "Tom",
  "Kaustav",
];
///slice - method returns the selected element in an array,as a new array object.
///splice - method returns the removed element in an array
const findDuplicateElement = (arr) => {
  let sorted_array = arr.slice().sort();
  let result = [];
  for (let i = 0; i < sorted_array.length - 1; i++) {
    if (sorted_array[i + 1] == sorted_array[i]) {
      result.push(sorted_array[i]);
    }
  }
  return result;
};
console.log(findDuplicateElement(arrayElement));

const findDuplicateElementinES6 = [
  ...new Set(
    arrayElement.filter((values, index, self) => self.indexOf(values) !== index)
  ),
];
console.log(findDuplicateElementinES6);
///Remove duplicates from array
const removeDuplicateElement = [...new Set(arrayElement)];
console.log(removeDuplicateElement);
//Type Conversion
console.log("3" + 2);
console.log("4" - 2 + "2");
console.log("5" * 2);
console.log("6" / 2);
console.log(6 + true); ///true means +1
console.log(7 + false); // false means 0
//Selector
//Selecting Dom Element in javascript
//Selecting the top most element - document.documentElement.getAttribute("lang");
//Selecting by  id- document.getElementById
//Selecting by class-name document.getElementByClass
//Selecting by tag-name document.getElementByTagName("p")
//Selecting by css selector document.querySelectorAll("ul","li");

///window object
// window object is used to display the window object in the browser to display the  web page && global object
///document object
// document object is used to display the representation of the your current web page

///Regexp object
//Regex syntax
// let regex = /Gourav/;
let regex = /^Mr\./;
let str = "Mr. Gourav is learning coding";
if (regex.test(str)) {
  console.log("Match found");
} else {
  console.log("No match found");
}
let regexmatch = /ca[ke]/g;
let str2 = "Happy Birthday cake is given cake";
let match = str2.match(regexmatch);
console.log("lenght: " + match.length);
