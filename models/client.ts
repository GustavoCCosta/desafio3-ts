import IUser from "./iuser";

export class Client implements IUser {

    private _name: String;
    constructor() {
        this._name = "";
    }

    public get name() : String {
        return this._name;
    }
    
    public set name(v: String) {
        this._name = v;
    }

    public auth(): boolean {
        return true;
    }
}