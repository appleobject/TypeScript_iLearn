//Interface in TypeScript

function log(val: any): void {
  console.log(val);
}

interface IComplexType {
  id: number;
  name?: string;
}

let complexType: IComplexType = { id: 1 };

interface Point {
  readonly x: number;
  y: number;
}

let p1: Point = { x: 3, y: 4 };
p1.x = 6;

log(p1);
