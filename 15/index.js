let persons = ["shah jee", "sufi", "ranay"]

let msg = "Sham ka khana meri taraf sai AlFazal pai"


for(let i=0; i<persons.length; i++){
    console.log(persons[i].toUpperCase(), msg)
  }
  
  console.log("----------------------------------------------------------")
  console.log(persons[1].toUpperCase(), "cant make it to the dinner due to some personal matter")
  console.log("----------------------------------------------------------")
  
  // Replacement of sufi
  persons[1]="kashi"


  // new invitation list to the people
  for(let i=0; i<persons.length; i++){
      console.log(persons[i].toUpperCase(), msg)
    }