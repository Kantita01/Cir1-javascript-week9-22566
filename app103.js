// Concise method syntag
    const id = 101;
    const data = { // Create data object
    firstName: "Mark",
    lastName: "Zuckerberg", 
    id, // Property shorthand
    fullName() { 
        // Method shorthand
        return this.firstName + this.lastName + id;
    },
};
console.log("Object:", data);
console.log("ID:", id);
console.log("Full Name:", data.firstName + " " + data.lastName);