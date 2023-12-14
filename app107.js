//Object methods
number = 5.502;
const person = {
    name: "Mark",
    age: 42,
    ///Using function as a value
    greet: () => {
        // console.log("Hello")
        return 'Hello'
    },
    result: parseInt(number),
};
// person.greet();
console.log(person.greet());
console.log(person.result);