//This Keyword
const person = {
    name:"Jhon",
    age:35,
    greet:function () {
        const surname = "Doe"
        console.log(this.name, surname)
    }
};
person.greet()
