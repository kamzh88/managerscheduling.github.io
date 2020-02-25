import axios from "axios";

export default {
    //Under All Employees Component
    saveEmployee: function(employeeData) {
        return axios.post("/api/employee/", employeeData);
    },
    getEmployees: function(id) {
        return axios.get("/api/employee/" + id);
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    saveShifts: function(shiftData) {
        console.log(shiftData);
    }
}