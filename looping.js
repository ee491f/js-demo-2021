let items = [
  "one",
  1,
  3.3,
]

console.log("looping through array");
for (item of items) {
  console.log(item);
}

let objects = {
  first: 1,
  second: 2,
  items: items,
}

console.log("looping through object");
for (key in objects) {
  console.log("key: " + key);
  console.log("value: " + objects[key])
}
