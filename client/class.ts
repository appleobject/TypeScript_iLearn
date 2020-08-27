//Classes in TypeScript
class SimpleClass {
  id: number;
  print(): void {
    console.log(`SimpleClass id : ${this.id}`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 234;
mySimpleClass.print();
