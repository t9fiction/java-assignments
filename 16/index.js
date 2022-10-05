let persons = ["shah jee", "sufi", "ranay"]

let msg = "Dinner on me"


for(let i=0; i<persons.length; i++){
    console.log(persons[i].toUpperCase(), msg)
  }
  
  console.log("----------------------------------------------------------")
  console.log("well, the table is bigger and we can invite more friends, so lets invite")
  console.log("----------------------------------------------------------")
  
  // Addition of new elements in the array
  //In the start of the Array
  persons.unshift("ali")

  //In the center of the array
  persons.splice(3,0,"naeem")

  
  //At the end of the array
  persons.push("kashi")


  // new invitation list to the people
  for(let i=0; i<persons.length; i++){
      console.log(persons[i].toUpperCase(), msg)
    }