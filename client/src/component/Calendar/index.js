import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, MenuItem } from '@material-ui/core';
import API from '../../utils/API';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "../Wrapper";

class Calendar extends Component {

    state = {
        employees: [],
        name: ''
    }

    componentDidMount() {
        this.loadEmployees();

    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    loadEmployees = () => {

        API.getEmployees(this.props.authUser.uid)
            .then(res =>
                this.setState({ employees: res.data.employees })
            )
            .catch(err => console.log(err));
    }

    render() {

        const { employees, name } = this.state;
        console.log(employees);

        return (
            <div>
                <Wrapper>
                    <form style={{ display: "flex", flexDirection: "column" }}
                        onSubmit={this.onSubmit}
                    >
                        <TextField
                            // id="standard-select-currency"
                            select
                            label="Select"
                            value={name}
                            onChange={this.handleChange("name")}
                            helperText="Select an employee"
                        >
                            {employees.map(option => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.firstName} {option.lastName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </form>
                </Wrapper>
                <Table striped bordered style={{ width: "90%", margin: 50 }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                                <td>{employee.shifts}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
};

export default Calendar;