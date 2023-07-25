import { Account } from "./account";

export class CurrentAccount extends Account{
    constructor(number: String,limit: number){
        super(number,limit);
    }

    //@Overrider
    public toString(): String{
        return "Numero: "+this.number+"\n"+"Saldo: "+this.balance+"\n";
    }

    public calculateBalance(): number{
        return this.balance;
    }
}