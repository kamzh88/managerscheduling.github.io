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
        console.log(this.state.employees);

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
                        <tr>
                            <td>1</td>
                            <td>Employee A</td>
                            <td>11am-8pm</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>
                            <td>3pm-11pm</td>
                            <td>3pm-11pm</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Employee B</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>
                            <td>11am-8pm</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Employee C</td>
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td>   
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td> 
                            <td>3pm-11pm</td>
                            <td>11am-8pm</td> 
                            <td>11am-8pm</td> 
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
};

export default Calendar;