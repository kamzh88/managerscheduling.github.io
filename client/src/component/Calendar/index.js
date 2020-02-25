import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, MenuItem } from '@material-ui/core';
import API from '../../utils/API';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "../Wrapper";

class Calendar extends Component {

    state = {
        employees: [],
        id: '',
        date: '',
        shiftStart: '',
        shiftEnd: ''
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

    onSubmit = (e) => {
        e.preventDefault()
        const { id, date, shiftStart, shiftEnd } = this.state;
        API.saveShifts({
            shiftStart: `${date}T${shiftStart}`,
            shiftEnd: `${date}T${shiftEnd}`,
            _id: id
        })
    }

    render() {

        const { employees, id, date, shiftStart, shiftEnd } = this.state;
        console.log(employees);

        return (
            <div>
                <Wrapper>
                    <form style={{ display: "flex", flexDirection: "column" }}
                        onSubmit={this.onSubmit}
                    >
                        <TextField
                            required
                            style={{ marginBottom: 20 }}
                            select
                            label="Select"
                            value={id}
                            onChange={this.handleChange("id")}
                            helperText="Select an employee"
                        >
                            {employees.map(option => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.firstName} {option.lastName}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            style={{ marginBottom: 20 }}
                            id="date"
                            label="Select Date"
                            type="date"
                            // defaultValue="2020-02-24"
                            value={date ? date : "2020-02-24"}
                            onChange={this.handleChange("date")}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            required
                            style={{ marginBottom: 20 }}
                            id="shiftStart"
                            label="Start Time"
                            type="time"
                            value={shiftStart ? shiftStart : "11:00"}
                            onChange={this.handleChange("shiftStart")}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 1800, // 5 min
                            }}
                        />
                        <TextField
                            required
                            style={{ marginBottom: 20 }}
                            id="shiftEnd"
                            label="End Time"
                            type="time"
                            value={shiftEnd ? shiftEnd : "23:00"}
                            onChange={this.handleChange("shiftEnd")}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 1800, // 5 min
                            }}
                        />
                        <Button
                            style={{ marginBottom: 20 }}
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                        // disabled={isInvalid}
                        >
                            Submit
                    </Button>
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