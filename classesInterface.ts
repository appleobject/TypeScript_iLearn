interface IPrint {
  print();
}

function printClass(a: IPrint) {
  console.log(a);
  return null;
}

class ClassA implements IPrint {
  print() {
    console.log(`ClassA.print() is called...`);
  }
}

class ClassB implements IPrint {
  print() {
    console.log(`ClassB.print() is called...`);
  }
}

let classA = new ClassA();
classA.print();
let classB = new ClassB();
