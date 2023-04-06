//Currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

import { compose, pipe } from "lodash/fp";

let input = "     Redux Starter    ";

//Passing multilevel functions using lodash pipe/conpose
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // currying- We return funnctio instead of a value
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
const result = transform(input);

export default result;
