import axios from "axios";

export default {
    saveEmployee: function(employeeData) {
        return axios.post("/api/employee/", employeeData);
    },
    getEmployees: function(id) {
        console.log(id);
        return axios.get("/api/employee/" + id);
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    }
}