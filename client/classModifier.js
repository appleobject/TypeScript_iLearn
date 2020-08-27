//Class Modifiers
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    ClassWithPublicProperty.printData = function () {
        console.log(this._hobby);
    };
    Object.defineProperty(ClassWithPublicProperty.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassWithPublicProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassWithPublicProperty.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: true,
        configurable: true
    });
    ClassWithPublicProperty._hobby = "Playing Video Games Like PS4 Console...";
    return ClassWithPublicProperty;
}());
ClassWithPublicProperty.printData();
