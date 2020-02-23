import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Wrapper from "../Wrapper";
import API from "../../utils/API";

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
        employees: []
    }

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {

        API.getEmployees()
            .then(res =>
                this.setState({ employees: res.data }))
            .catch(err => console.log(err));
    }

    onSubmit = e => {
        e.preventDefault();
        const { authUser } = this.props;
        const { firstName, lastName, email, position } = this.state;
        console.log(authUser);
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

    render() {

        const { firstName, lastName, email, position, employees } = this.state;

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
                    <Card variant="outlined">
                        {employees.map((employee, index) => (
                            <Card key={index} variant="outlined" style={{ width: "auto", margin: 20 }}>
                                <div style={{ overflow: "auto", padding: 10 }}>
                                    <p>Name: {employee.firstName} {employee.lastName}</p>
                                    <p>Position: {employee.position}</p>
                                    <p>Email: {employee.email}</p>
                                    <p>Shifts:</p>
                                </div>
                            </Card>
                        ))}
                    </Card>
                </div>
            </Fragment>

        )
    }
};



const AllEmployeesNonAuth = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
                <Link to="/SignIn">Sign In </Link>
            </h1>
        </Fragment>
    )
};

export default AllEmployees;