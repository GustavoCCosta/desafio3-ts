import { Client } from "./models/client";

var client = new Client("Gustavo","113","9547",true);

client.name = "HA";

console.log("Nome: "+client.name+"\n"+
            "CPF: "+client.cpf+"\n"+
            "Phone: "+client.phone+"\n"+
            "VIP: "+client.vip);