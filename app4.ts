import { Address } from "./models/address";
import { Client } from "./models/client";
import { CurrentAccount } from "./models/currentaccount";
import { SavingAccount } from "./models/savingsaccount";

var name = "José";
var cpf = "987";
var phone = "(82)91111-1111";
var enderecos: Address[] = [];
var endereco = new Address("57048-000","Rua Fictícia","65","Na rua","Maceió","Alagoas");
enderecos.push(endereco);
var caccount: CurrentAccount = new CurrentAccount("25987",0);
var cliente1: Client = new Client(name,cpf,phone,true,enderecos,caccount);

name = "Juca";
cpf = "521";
phone = "(82)92222-2222";
enderecos = [];
endereco = new Address("56589-589","Rua q não existe","42","Na principal","Maceió","Alagoas");
enderecos.push(endereco);
var saccount: SavingAccount = new SavingAccount("89712");
var cliente2: Client = new Client(name,cpf,phone,true,enderecos,saccount);

console.log("Saldo de "+cliente1.name+": "+cliente1.caccount.calculateBalance());
console.log("Saldo de "+cliente2.name+": "+cliente2.caccount.calculateBalance());

cliente1.caccount.deposit(1000);
cliente2.caccount.deposit(1000);

if (cliente1.caccount instanceof CurrentAccount) {
    cliente1.caccount.transfer(cliente2.caccount,500);
}

console.log("Saldo de "+cliente1.name+": "+cliente1.caccount.calculateBalance());
console.log("Saldo de "+cliente2.name+": "+cliente2.caccount.calculateBalance());