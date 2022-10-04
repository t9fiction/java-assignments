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
document.write("<h2>Lower Case : ", myName.toLowerCase(), "</h2>");
document.write("<h2>Upper Case : ", myName.toUpperCase(), "</h2>");
document.write("<h2>Title Case : ", toTitleCase(myName), "</h2>");
