export abstract class Person {
  private _name: String;
  private _cpf: String;
  private _phone: String;

  constructor(name: String, cpf: String, phone: String) {
    this._name = name;
    this._cpf = cpf;
    this._phone = phone;
  }

  // Getters
  get name(): String {
    return this._name;
  }

  get cpf(): String {
    return this._cpf;
  }

  get phone(): String {
    return this._phone;
  }

  // Setters
  set name(newName: String) {
    console.log("Impossível definir " + newName);
  }

  set cpf(newCpf: String) {
    console.log("Impossível definir " + newCpf);
  }

  set phone(newPhone: String) {
    console.log("Impossível definir " + newPhone);
  }
}