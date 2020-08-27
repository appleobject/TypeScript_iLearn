//Union types
var unionType;
unionType = 45;
unionType = "Liverpool";
//type guard
function addWithTypeGuard(arg1, arg2) {
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
function addNum(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
//Null & Undefined
function testUndef(test) {
    console.log("The test parameter.." + test);
}
testUndef();
testUndef(null);
