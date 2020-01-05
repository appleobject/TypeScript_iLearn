//Protected Class Member

class ClassUsingProtected {
  protected id: number;

  public getId(): number {
    return this.id;
  }
}

class DerivedFromProtected extends ClassUsingProtected {
  constructor() {
    super();
    this.id = 0;
  }
}

var derivedFromProtected = new DerivedFromProtected();
derivedFromProtected.id = 1;

console.log(`getId returns : ${derivedFromProtected.getId()}`);
