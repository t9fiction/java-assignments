//First Variable
const myName = "Sohail Ishaque";

const toTitleCase = (str) => {
  const titleCaseString = str
    .toLowerCase()
    .split(" ")
    .map(function (s) {
      return s.charAt(0).toUpperCase() + s.substring(1);
    })
    .join(" ");
  return titleCaseString;
};

//Output
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
console.log(toTitleCase(myName))
