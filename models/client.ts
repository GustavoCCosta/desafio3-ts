import IUser from "./iuser";
import { Person } from "./person";
import { Address } from "./address";

export class Client extends Person implements IUser  {
    private _vip: Boolean;
    private _addresses: Address[];

    constructor(name: String, cpf: String, phone: String, vip: Boolean, adresses: Address[]) {
        super(name, cpf, phone);
        this._vip = vip;
        this._addresses = adresses;
    }

    // Getters
    public get vip() : Boolean {
        return this._vip;
    }

    public listAddresses(): String{
        return this._addresses.toString();
    }

    // Setters
    public set vip(vip: Boolean){
        this._vip = vip;
    }
    
    public addAddress(address: Address){
        this._addresses.push(address);
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