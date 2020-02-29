import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import TimeSheet from "../TimeSheet";

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll'
    }
}

const AllEmployees = ({ authUser }) => {
    return (
        <div>{authUser ? <AllEmployeesAuth authUser={authUser} /> : <AllEmployeesNonAuth authUser={authUser} />}</div>
    )
};

class AllEmployeesAuth extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        employees: [],
        shifts: [],
        // employeeID: '',
        // shiftEmployeeID: [],
        // employeeid: '',
        // data: []
    }

    componentDidMount() {
        this.loadEmployees();
        this.loadShifts();
    }

    loadShifts = () => {
        API.getShifts(this.props.authUser.uid)
            .then(res =>
                this.setState({ shifts: res.data })
            ).catch(err => console.log(err));
    }

    loadEmployees = () => {

        API.getEmployee(this.props.authUser.uid)
            .then(res => {
                // console.log(res.data)
                // const shifts = Object.values(res.data.shifts).map((shift) => {
                //     return shift.startTime;
                // })
                // for (var i = 0; i < res.data.length; i++) {
                //     let len = res.data[i].shifts.length
                //     for (var j = 0; j < len; j++) {
                //         let shift = res.data[i].shifts[j];

                //         this.state.shifts.push(shift);

                //     };
                // };
                // const employeeID = res.data.map(employeeID => (employeeID._id))
                // console.log(employeeID)
                // const shiftEmployeeID = this.state.shifts.map(shiftID => (shiftID.id))
                // console.log(shiftEmployeeID);
                // const data = res.data;
                // const shifts = data.map(shift => {
                //     shift
                // })
                // const shift = Object.entries(data);

                this.setState({
                    employees: res.data,
                    shifts: this.state.shifts,
                    // employeeID: employeeID,
                    // shiftEmployeeID: shiftEmployeeID
                });
            })
            .catch(err => console.log(err));
    }

    onSubmit = e => {
        e.preventDefault();
        const { authUser } = this.props;
        const { firstName, lastName, email, position } = this.state;
        // console.log(authUser);
        API.saveEmployee({
            firstName: firstName,
            lastName: lastName,
            email: email,
            position: position,
            uid: authUser.uid
        }).then(res => this.loadEmployees())
            .catch(err => console.log(err));
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });

    }

    // imageChange = event => {
    //     let employeeid = event.employeeid;
    //     this.state.shifts.filter((shift) => (shift.id === employeeid));

    //     console.log(data)
    //     // this.setState({ data: data})
    // }



    render() {

        const { firstName, lastName, email, position, employees, shifts, employeeID, shiftEmployeeID } = this.state;
        // console.log(this.state.data)
        return (

            <Fragment>
                <Wrapper>
                    <Typography variant="h5" style={{ marginTop: 24, marginBottom: 24 }}>
                        Employees Form
                    </Typography>
                    <form
                        style={{ display: "flex", flexDirection: "column" }}
                        onSubmit={this.onSubmit}
                    >
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"text"}
                            label={"First Name"}
                            value={firstName}
                            onChange={this.handleChange("firstName")}
                        />
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"text"}
                            label={"Last Name"}
                            value={lastName}
                            onChange={this.handleChange("lastName")}
                        />
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"email"}
                            label={"Email"}
                            value={email}
                            onChange={this.handleChange("email")}
                        />
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"text"}
                            label={"Position Name"}
                            value={position}
                            onChange={this.handleChange("position")}
                        />
                        <Button
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
                <div style={styles.Card}>
                    <h1>Employee List</h1>
                    {employees.map((employee, index) => (

                        <Card
                            key={index}
                            variant="outlined"
                            style={{ width: "auto", margin: 20 }}
                        // value={employee._id}
                        // name={this.employeeid}
                        >
                            <div
                                style={{ overflow: "auto", padding: 10 }}
                            >
                                <p>Name: {employee.firstName} {employee.lastName}</p>
                                <p>Position: {employee.position}</p>
                                <p>Email: {employee.email}</p>
                                <div>
                                    <p>Shifts:</p>
                                    {/* {this.state.shifts.map((shift, index) => ( */}
                                    <TimeSheet

                                        data={this.state.shifts.filter((shift) => (shift.id === employee._id))}
                                    // key={index}
                                    // employeeid={employee._id} 
                                    // shiftid={shift.id}
                                    // onChange={this.imageChange({
                                    //     employeeid: employee._id
                                    //     // shiftid: shift.id
                                    // })}
                                    // employeeid={employee._id}
                                    // value={shift.id}
                                    // starttime={shift.StartTime}
                                    // endtime={shift.EndTime}
                                    // handleimage={this.handleImage({
                                    //     employeeid: this.props.employeeid
                                    // })}
                                    >
                                        {/* ))} */}
                                        {shifts.length ? (
                                            <div
                                            // employeeid = {employee_id}
                                            >
                                                {/* {shifts.filter((shift) => (shift.id === employee._id)(
                                                console.log(shift)
                                            ))} */}
                                                {/* {shifts.filter((shift) => (shiftEmployeeID === employeeID)(
                                                    console.log(shift.StartTime)
                                            ))} */}
                                                {/* <p>Shift Start: {shift.StartTime} </p>
                                                <p>Shift End: {shift.EndTime}</p><br></br> */}
                                            </div>


                                        ) : (
                                                <div></div>
                                            )
                                        }
                                    </TimeSheet>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Fragment >

        )
    }
};



const AllEmployeesNonAuth = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
                <Link to="/SignIn">Sign In</Link>
            </h1>
        </Fragment>
    )
};

export default AllEmployees;

// {employees.map((employee, index) => (

//     <Card key={index} variant="outlined" style={{ width: "auto", margin: 20 }}>
//         <div style={{ overflow: "auto", padding: 10 }}>
//             <p>Name: {employee.firstName} {employee.lastName}</p>
//             <p>Position: {employee.position}</p>
//             <p>Email: {employee.email}</p>
//             {/* <p>Shifts:{employee.shifts} </p> */}
//         </div>
//     </Card>
// ))}