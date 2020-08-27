class BaseClass implements IBase {
  id: number;
}

class DerivedBase extends BaseClass implements IDerivedFromBase {
  name: string;
}
