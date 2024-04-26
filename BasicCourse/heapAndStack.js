//Stack memory is static 
//heap memory is dynamic

let name = "Abdul Aziz"
let name1=name;
name1="Kamrudin"
console.log(name)
console.log(name1)

let obj ={
    name2:"Aan",
}
let obj1=obj;

obj1.name2="Asghar";
console.log(obj1.name2)
console.log(obj.name2);