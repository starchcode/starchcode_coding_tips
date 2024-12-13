class SpecialArray extends Array {
  get last() {return this[this.length - 1]; }
}

const myArray = new SpecialArray(1, 2, 3, 4, 5)

myArray.last; // 5

myArray.push(6)

myArray.last; // 6
