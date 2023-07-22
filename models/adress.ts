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
    get cep(): String {
        return this._cep;
    }

    get street(): String {
        return this._street;
    }

    get number(): String {
        return this._number;
    }

    get complement(): String {
        return this._complement;
    }

    get city(): String {
        return this._city;
    }

    get uf(): String {
        return this._uf;
    }

    // Setters
    set cep(value: String) {
        this._cep = value;
    }

    set street(value: String) {
        this._street = value;
    }

    set number(value: String) {
        this._number = value;
    }

    set complement(value: String) {
        this._complement = value;
    }

    set city(value: String) {
        this._city = value;
    }

    set uf(value: String) {
        this._uf = value;
    }
}