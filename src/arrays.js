//Updating Arrays
const numbers = [1, 2, 3];
//adding
const index = numbers.indexOf(2);
const addedNumbers = [...numbers.slice(0, index), 8, ...numbers.slice(index)];
//Removing
// const deletedNumbers = [
//   ...numbers.slice(0, index),
//   ...numbers.slice(index + 1),
// ];
//or
const deletedNumbers = numbers.filter((m) => m !== 2);
//Updtaing
const updatedNumbers = numbers.map((m) => (m === 2 ? 20 : m));

const arrays = { numbers, addedNumbers, deletedNumbers, updatedNumbers };

export default arrays;
