class ClassWithConstructor {
  id: number;
  name: string;
  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }
  getName(): number {
    return this.id;
  }
}

let classWithConstructor = new ClassWithConstructor(45, "navin");
console.log(classWithConstructor.getName());
