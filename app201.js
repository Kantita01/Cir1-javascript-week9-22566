//Object() Constructor
function Person(p_name,p_age) {
    this.name = p_name,
    this.age = p_age
}

//Create an object
const person = new Person('Jhon',22);
console.log(person);
console.log(person.name);
