//Nested Object
const student = {
    name: "Mark",
    age: 20,
    marks: {
        science: 70,
        math: 75,
    }
}
//accessing property of student object
console.log(student.marks)
console.log("Science:", student.marks.science)
console.log("Math:", student.marks.math)