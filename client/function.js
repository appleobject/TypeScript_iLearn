function log(val) {
    console.log(val);
}
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
function people(firstName) {
    var remainingName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainingName[_i - 1] = arguments[_i];
    }
    return firstName + " " + remainingName.join(" ");
}
var personOne = people("Jude-Scott", "34-45 Hooper Street Ikeja", "45", "10010");
var personTwo = people("Navin-Randle", "14-25 Ajao Street Ikate", "65", "10050");
log(personOne);
log(personTwo);
log(buildName("Kvng"));
