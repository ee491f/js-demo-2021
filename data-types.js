var stringVariable = "string value"
console.log(stringVariable);
const numberVariable = 3.3
console.log(numberVariable);
var arrayVariable = [
  "1",
  1,
  stringVariable,
  numberVariable,
]
console.log(arrayVariable)
let objectVariable = {
  "key": "value",
  "arrayVariable": arrayVariable,
}
objectVariable[stringVariable] = numberVariable;
console.log(objectVariable)
