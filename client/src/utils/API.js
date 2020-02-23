import axios from "axios";

export default {
    saveEmployee: function(employeeData) {
        return axios.post("/api/employee/", employeeData);
    },
    getEmployees: function() {
        return axios.get("/api/employee");
    },
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
        // console.log(userData);
    }
}