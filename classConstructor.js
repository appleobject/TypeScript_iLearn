var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    ClassWithConstructor.prototype.getName = function () {
        return this.id;
    };
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(45, "navin");
console.log(classWithConstructor.getName());
