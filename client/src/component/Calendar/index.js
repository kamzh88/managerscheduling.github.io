import React, { Component, Fragment } from "react";
import { Button } from '@material-ui/core';
import API from '../../utils/API';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Calendar extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        employees: []
    }

    componentDidMount() {
        this.loadEmployees();

    }

    loadEmployees = () => {

        API.getEmployees(this.props.authUser.uid)
            .then(res =>
                this.setState({ employees: res.data.employees })
            )
            .catch(err => console.log(err));
    }

    render() {

        const { employees } = this.state;
        console.log(employees);

        return (
            <div>
                <Table striped bordered hover style={{ width: "90%", margin: 50 }}>
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
                                <td>{index}</td>
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