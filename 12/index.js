let names = ["ali", "qasim", "babar", "javaid", "aqib"]

let text = "Congratulations! You made it to the Metaverse class"

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
console.log(toTitleCase(names[0]), text)
console.log(toTitleCase(names[1]), text)
console.log(names[2].toUpperCase(), text)
console.log(names[3].toLowerCase(), text)
console.log(names[4].toUpperCase(), text)