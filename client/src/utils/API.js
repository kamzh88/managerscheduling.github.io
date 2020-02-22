import Axios from "axios";

export default {
    saveEmployee: function(employeeData) {
        // console.log(employeeData);
        return Axios.post("/api/employee", employeeData);
    }
}