var list = ["Apple", "Navin", "Adewale", 5, true];
var person = "Steve";
var heightInCentimetre = 2348.353527;
var artist = ["Rick", "Wale", "Meek", "Nav", "4", "Tac"];
var row = [4, 5, 6, 7, 8, 9];
var booltest = [true, false, false];
var tupleTest = ["FireBoy", 10, true];
var DoorStart;
(function (DoorStart) {
    DoorStart[DoorStart["Open"] = 0] = "Open";
    DoorStart[DoorStart["Closed"] = 1] = "Closed";
    DoorStart[DoorStart["Ajar"] = 2] = "Ajar";
})(DoorStart || (DoorStart = {}));
function log(val) {
    console.log(val);
}
function tellJokes() {
    return "This is a joke";
}
log(tellJokes());
