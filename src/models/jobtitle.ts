import { Employee } from "./employee";

export class JobTitle{
    private _name: String;

    constructor(name: String){
        this._name = name;
    }

    // Getters
    public get name(): String{
        return this._name;
    }

    //Setters
    public set name(name: String){
        this._name = name;
    }

    //@overrider
    public toString(): String{
        return this._name;
    }
}