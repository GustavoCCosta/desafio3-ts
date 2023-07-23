import { Address } from "./models/address";
import { Client } from "./models/client";

var address1 = new Address("01","01","01","01","Maceió","01");
var address2 = new Address("02","02","02","02","Penedo","02");
var client = new Client("Gustavo","113","9547",true);
client.addAddress(address1);
client.addAddress(address2);

client.name = "HA";

console.log("Nome: "+client.name+"\n"+
            "CPF: "+client.cpf+"\n"+
            "Phone: "+client.phone+"\n"+
            "VIP: "+client.vip+"\n"+
            "Address: "+client.addresses);