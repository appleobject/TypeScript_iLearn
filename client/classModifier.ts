//Class Modifiers

class ClassWithPublicProperty {
  private _id: number;
  private _name: string;
  static _hobby: string = "Playing Video Games Like PS4 Console..."; //Static

  static printData(): void {
    console.log(this._hobby);
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get hobby(): string {
    return this._hobby;
  }
  public set hobby(value: string) {
    this._hobby = value;
  }
}

ClassWithPublicProperty.printData();
