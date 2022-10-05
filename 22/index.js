/**
 *  Intentional Error:
 *  If you haven’t received an array index error in one of your programs yet, try to make one happen.
 *  Change an index in one of your programs to produce an index error.
 *  Make sure you correct the error before closing the program.
 */

let persons = ["shah", "sufi", "rana"]


// Loop with Index Error
for(let i=0; i<=persons.length; i++){
    console.log(persons[i])
  }
  
  // Loop without Index Error
  for(let i=0; i<persons.length; i++){
      console.log(persons[i])
    }