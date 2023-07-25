import { Credit } from "./credit";
import { Debit } from "./debit";

export abstract class Account{
    private _creditsOP: Credit[];
    private _debitsOP: Debit[];
    private _balance: number;
    private _limit: number;

    constructor(private _number: String, limit: number){
        this._creditsOP = [];
        this._debitsOP = [];
        this._balance = 0;
        this._limit = limit;
    }

    public deposit(v: number){
        let date: Date = new Date();
        let credit: Credit = new Credit(v,date);
        this._creditsOP.push(credit);
        this._balance += v;
        
        console.log("Deposito de "+v+" efetuado");
    }


    /* 
    PRIMERO SUBTRAI DEBIDO DO BALANCO, SE BALANCO MENOR QUE 0, ENTAO
    BALANCO SUBTRAI LIMITE, SE LIMITE MENOR QUE 0, ENTAO INVALIDA OP.
    */
    public withdrawn(v: number): Boolean{
        if((this._balance + this._limit - v) < 0) {
            console.log("Saque de "+v+" NÃO efetuado por falta de saldo e limite!");
            return false;
        }
        this._balance -= v;
        const date: Date = new Date();
        var debit: Debit = new Debit(v,date);
        this._debitsOP.push(debit);
        console.log("Saque de "+v+" efetuado");
        return true;
    }

    // Getters
    public get number() : String {
        return this._number;
    }

    public get balance() : number {
        return this._balance;
    }

    
    public get limit() : number {
        return this._limit;
    }
    
    //Setters
    public set number(v : String) {
        this._number = v;
    }
    
    public set balance(v : number) {
        this._balance = v;
    }

    public set limit(v : number) {
        this._limit = v;
    }
}