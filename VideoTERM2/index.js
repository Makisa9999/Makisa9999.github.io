let array = ['Item 1', 'Item 2', 'Item 3'];

// Here's 4 different ways
    for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    }

for (let index in array) {
  console.log(array[index]);
}

for (let value of array) {
  console.log(value); // Will each value in array
}
// First three loops will print-out every object in the list.
array.forEach((value, index) => {
  console.log(index); // Will log each index
  console.log(value); // Will log each value
});
/* Last one will print the index of the item and then after that it will print out the value of the 
item that is stored. */
