import { Account } from "./account";
import { SavingAccount } from "./savingsaccount";

export class CurrentAccount extends Account{
    constructor(number: String,limit: number){
        super(number,limit);
    }

    //@Override
    public toString(): String{
        return "Numero: "+this.number+"\n"+"Saldo: "+this.balance+"\n";
    }

    public calculateBalance(): number{
        return this.balance;
    }

    public transfer(account: CurrentAccount|SavingAccount, v: number){
        if(this.withdrawn(v)){
            account.deposit(v);
        }
    }
}