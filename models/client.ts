import IUser from "./iuser";
import { Person } from "./person";

export class Client extends Person implements IUser  {

    constructor(name: string, cpf: string, phone: string) {
        super(name, cpf, phone);
    }
    
    /**
     * Implements IUser auth
     * 
     * @returns True
     */
    public auth(): boolean {
        return true;
    }
}