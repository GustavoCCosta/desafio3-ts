import { Employee } from "./models/employee";
import { JobTitle } from "./models/jobtitle";

var name = "José";
var cpf = "987";
var phone = "(82)91111-1111";
var salario = 1000.01;
var jobs:JobTitle[] = [];
jobs.push(new JobTitle("Gerente"));
var gerente: Employee = new Employee(name,cpf,phone,salario,jobs);

name = "Lucas";
cpf = "456";
phone = "(82)92222-3333";
salario = 500.00;
jobs = [];
jobs.push(new JobTitle("Atendente"));
var atendente: Employee = new Employee(name,cpf,phone,salario,jobs);

console.log(gerente.toString());
console.log(atendente.toString());