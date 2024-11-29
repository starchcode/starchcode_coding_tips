function addOne(passedData) {
  // creates a new object and 
  // does NOT modify original 'data' object

  return { value: passedData.value + 1 }
}

let data = { value: 1 };

addOne(data); // Pass the object to the function

console.log(data.value); // 1 
// (the object has NOT been mutated)
