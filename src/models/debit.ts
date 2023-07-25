export class Debit{
    constructor(private _value: number, private _date:Date){
    }

    // GETTERS
    public get value():number{
        return this._value
    }

    public get date() : Date {
        return this._date
    }
    
    // SETTERS
    public set value(v : number) {
        this._value = v;
    }

    public set date(v : Date) {
        this._date = v;
    }
    
}