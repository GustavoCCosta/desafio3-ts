export class Address {
    private _cep: String;
    private _street: String;
    private _number: String;
    private _complement: String;
    private _city: String;
    private _uf: String;

    constructor(
        cep: String,
        street: String,
        number: String,
        complement: String,
        city: String,
        uf: String
    ) {
        this._cep = cep;
        this._street = street;
        this._number = number;
        this._complement = complement;
        this._city = city;
        this._uf = uf;
    }

    // Getters
    public get cep(): String {
        return this._cep;
    }

    public get street(): String {
        return this._street;
    }

    public get number(): String {
        return this._number;
    }

    public get complement(): String {
        return this._complement;
    }

    public get city(): String {
        return this._city;
    }

    public get uf(): String {
        return this._uf;
    }

    // Setters
    public set cep(value: String) {
        this._cep = value;
    }

    public set street(value: String) {
        this._street = value;
    }

    public set number(value: String) {
        this._number = value;
    }

    public set complement(value: String) {
        this._complement = value;
    }

    public set city(value: String) {
        this._city = value;
    }

    public set uf(value: String) {
        this._uf = value;
    }


    public toString(): String {
        var complete: String = "Endereço: \n" +
            "CEP: " + this._cep + "\n" +
            "Rua: " + this._street + "\n" +
            "Estado: " + this._uf + "\n" +
            "Cidade: " + this._city + "\n" +
            "Complemento: " + this._complement + "\n" +
            "Numero: " + this.number + "\n";
        return complete;
    }
}