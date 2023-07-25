import { Account } from "./account";

export class SavingAccount extends Account{
    constructor(number: String){
        super(number,0);
    }

    //@Overrider
    public toString(): String{
        return "Numero: "+this.number+"\n"+"Saldo: "+this.balance+"\n";
    }

    public calculateBalance(): number{
        return this.balance;
    }
}