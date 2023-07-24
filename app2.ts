import { Address } from "./models/address";
import { Client } from "./models/client";

import * as fs from 'fs';
import * as path from 'path';

var name = "José";
var cpf = "987";
var phone = "(82)91111-1111";
var enderecos: Address[] = [];
var endereco = new Address("57048-000","Rua Fictícia","65","Na rua","Maceió","Alagoas");
enderecos.push(endereco);
endereco = new Address("56589-589","Rua q não existe","42","Na principal","Maceió","Alagoas");
enderecos.push(endereco);
endereco = new Address("59875-321","Rua imaginária","22","Nem sei mais","Rio de Janeiro","RJ");
enderecos.push(endereco);

var cliente: Client = new Client(name,cpf,phone,true,enderecos);
console.log(cliente.listAddresses());


