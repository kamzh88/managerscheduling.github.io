const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/employees"
);

const employeeSeed = [
    {
        userName: "employeeA",
        firstName: "Employee",
        lastName: "A",
        position: "Cashier",
        email: "employeeA@gmail.com",
        phone: "888-888-8888",
        dateHired: "01/11/2020"
    },
    {
        userName: "employeeB",
        firstName: "Employee",
        lastName: "B",
        position: "Cashier",
        email: "employeeB@gmail.com",
        phone: "666-666-6666",
        dateHired: "01/11/2020"
    },
    {
        userName: "employeeC",
        firstName: "Employee",
        lastName: "C",
        position: "Driver",
        email: "employeeC@gmail.com",
        phone: "111-111-1111",
        dateHired: "01/11/2020"
    }
];

db.Employee
    .remove({})
    .then(() => db.Employee.collection.insertMany(employeeSeed))
    .then(data => {
        console.log(data.result.n + " reacords inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });