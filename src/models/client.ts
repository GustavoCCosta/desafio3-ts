import IUser from "./iuser";
import { Person } from "./person";
import { Address } from "./address";
import { CurrentAccount } from "./currentaccount";
import { SavingAccount } from "./savingsaccount";

export class Client extends Person implements IUser {
    private _vip: Boolean;
    private _addresses: Address[];
    private _caccount: CurrentAccount|SavingAccount;

    constructor(name: String, cpf: String, phone: String, vip: Boolean, adresses: Address[], caccount: CurrentAccount|SavingAccount) {
        super(name, cpf, phone);
        this._vip = vip;
        this._addresses = adresses;
        this._caccount = caccount;
    }

    // Getters
    public get vip(): Boolean {
        return this._vip;
    }

    public listAddresses(): String {
        return this._addresses.toString();
    }

    public get caccount() : CurrentAccount|SavingAccount {
        return this._caccount
    }
    
    // Setters
    public set vip(vip: Boolean) {
        this._vip = vip;
    }

    public addAddress(address: Address) {
        this._addresses.push(address);
    }

    public set caccount(v: CurrentAccount|SavingAccount){
        this._caccount = v;
    }

    /**
     * Implements IUser auth
     * 
     * @returns True
     */
    public authenticate(): Boolean {
        return new Boolean(true);
    }

    //@override
    public toString(): String {
        var complete: String = "Cliente: \n" +
            "Nome: " + this.name + "\n" +
            "CPF: " + this.cpf + "\n" +
            "Telefone: " + this.phone + "\n" +
            "VIP: " + this._vip + "\n" +
            "Endereços: " + this.listAddresses() + "\n" +
            "Conta Corrente: " + this._caccount.toString() + "\n";
        return complete;
    }
}