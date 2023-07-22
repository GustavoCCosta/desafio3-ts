export abstract class Person {
    private _name: String;
    private _cpf: String;
    private _phone: String;
    
    constructor(name: string, cpf: string, phone: string) {
        this._name = name;
        this._cpf = cpf;
        this._phone = phone;
    }

    /*Getters and Setters*/
      // Getter para o atributo name
  get name(): String {
    return this._name;
  }

  // Setter para o atributo name
  set name(newName: String) {
    console.log("Impossível definir "+newName);
  }

  // Getter para o atributo cpf
  get cpf(): String {
    return this._cpf;
  }

  // Setter para o atributo cpf
  set cpf(newCpf: String) {
    console.log("Impossível definir "+newCpf);
  }

  // Getter para o atributo phone
  get phone(): String {
    return this._phone;
  }

  // Setter para o atributo phone
  set phone(newPhone: String) {
    console.log("Impossível definir "+newPhone);
  }
}