let persons = ["shah jee", "sufi", "ranay"]

let msg = "Sham ka khana meri taraf sai AlFazal pai"


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
  
  // 17 reducing the people
  console.log("----------------------------------------------------------")
  console.log("bro, program changed, can't invite you all, but only 2")
  console.log("----------------------------------------------------------")
  
  // Cancelling the invitations
  for(let i=persons.length; i>2; i--){
    const kicked_out = persons.pop()
    console.log(kicked_out, "Bhai, table hi choti hai, mei ab kia karon. tu na aayen.")
  }
  
  console.log("----------------------------------------------------------")
  console.log("NEW invitations for the following only")
  console.log("----------------------------------------------------------")
  
  
    for(let i=0; i<persons.length; i++){
      console.log(persons[i].toUpperCase(), "You are still invited. Plz join me for the dinner")
    }