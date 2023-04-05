import { compose, pipe } from "lodash/fp";

// console.log("Hello World!");
// setTimeout(() => console.log("Hello World"), 5000);

let input = "     Redux Starter    ";
// let output = "<div>" + input.trim() + "</trim>";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);
const result = transform(input);

// const result = wrapInDiv(toLowerCase(trim(input)));

console.log(result);
