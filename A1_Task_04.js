// Sample CRUD Operations
const person = {
    id: 1,
    firstName: " Neeraja ",
    lastName: " Sanagala ",
    age: 21,
    email: " neerajasanagala@gmail.com "
};

// Create Method
person.city = "Vijayawada";

// Read Method
console.log("Read:", person);

// Update Method
person.age = 21;

// Display Method
console.log("Update:", person);

// Delete Method
delete person.city;

// Display Method
console.log("Delete:", person);