//Updating Objects
const person = { name: "Ankit", address: { city: "Bhopal", pin: 462001 } };
//const updated = Object.assign({}, person, { name: "Ashwanee", age: 23 });
//Or
const updatedPerson = {
  ...person,
  name: "Ashwanee",
  address: { ...person.address, city: "Rewa" },
  age: 34,
}; //Making Deep copy to save our original object from mutating
// updated.address.city = "Rewa";

const object = { person, updatedPerson };

export default object;
