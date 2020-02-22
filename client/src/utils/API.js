import axios from "axios";

export default {
    saveEmployee: function(employeeData) {
        return axios.post("/api/employee", employeeData);
    },
    getEmployees: function() {
        return axios.get("/api/employee");
    }
}