import IUser from "./iuser";
import { Person } from "./person";

export class Client extends Person implements IUser  {
    private _vip: Boolean;

    constructor(name: String, cpf: String, phone: String, vip: Boolean) {
        super(name, cpf, phone);
        this._vip = vip;
    }

    
    public get vip() : Boolean {
        return this._vip;
    }

    public set vip(vip: Boolean){
        this._vip = vip;
    }
    
    
    /**
     * Implements IUser auth
     * 
     * @returns True
     */
    public authenticate(): Boolean {
        return new Boolean(true);
    }
}