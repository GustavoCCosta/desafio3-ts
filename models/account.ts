import { Credit } from "./credit";
import { Debit } from "./debit";

export abstract class Account{
    private number: String;
    private balance: number;
    private credit: number;
    private creditsOP: Credit[];
    private debitsOP: Debit[];

    public deposit(){

    }
}