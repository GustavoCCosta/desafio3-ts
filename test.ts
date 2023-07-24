import { Address } from "./models/address";
import { Client } from "./models/client";

var address1 = new Address("01","01","01","01","Maceió","01");
var address2 = new Address("02","02","02","02","Penedo","02");
var addresses:Address[] = [];
addresses.push(address1);
addresses.push(address2);

var client = new Client("Gustavo","113","9547",true,addresses);

console.log("Nome: "+client.name+"\n"+
            "CPF: "+client.cpf+"\n"+
            "Phone: "+client.phone+"\n"+
            "VIP: "+client.vip+"\n"+
            "Address: "+client.listAddresses());