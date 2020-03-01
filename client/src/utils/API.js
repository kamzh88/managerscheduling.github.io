import axios from "axios";

export default {
    //Under All Employees Component
    saveEmployee: function(employeeData) {
        return axios.post("/api/employee/", employeeData);
    },
    //Under AllEmployees Component
    getEmployees: function(id) {
        return axios.get("/api/employee/" + id);
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    saveShifts: function(shiftData) {
        return axios.post("/api/shift", shiftData);
    },
    getEmployee: function(id) {
        return axios.get("/api/shift/" + id);
    },
    getShifts: function(id) {
        return axios.get("/api/shift/all/" + id);
    },
    //Use under TimeSheet component
    deleteShift: function(id) {
        console.log(id);
        return axios.delete("/api/shift/" + id);
    },
    updateShift: function (shiftData) {
        console.log(shiftData);
    }
}