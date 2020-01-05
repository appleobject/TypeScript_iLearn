//Union types

let unionType: string | number;
unionType = 45;
unionType = "Liverpool";

//type guard

function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
): string | number {
  if (typeof arg1 === "string") {
    console.log("The First argument is a string value...");
    return arg1 + arg2;
  }
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log("The both arguments are numbers...");
    return arg1 + arg2;
  }

  return arg1.toString() + arg2.toString();
}

//Type aliases
type stringOrNumber = string | number;

function addNum(arg1: stringOrNumber, arg2: stringOrNumber) {
  return arg1.toString() + arg2.toString();
}

//Null & Undefined

function testUndef(test: null | number) {
  console.log("The test parameter.." + test);
}
testUndef();
testUndef(null);
