import { Client } from "./models/client";
import { Person } from "./models/person";

var client:Person = new Client("Gustavo","113","9547",);

client.name = "HA";

console.log("Nome: "+client.name+"\n"+
            "CPF: "+client.cpf+"\n"+
            "Phone: "+client.phone);