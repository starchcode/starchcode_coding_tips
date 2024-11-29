function addOne(passedData) {
  // Directly modifies the object property
  passedData.value += 1;

  return passedData;
}

let data = { value: 1 }; 

addOne(data); // Pass the object to the function

console.log(data.value); // 2
// (the object has been mutated by addOne function)
