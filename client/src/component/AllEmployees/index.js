import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import Wrapper from "../Wrapper";

class AllEmployees extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        position: ''
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    render() {

        const { firstName, lastName, email, position } = this.state;

        return (
            <Wrapper>
                <Fragment>
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
                </Fragment>
            </Wrapper>
        )
    }
};

// const AllEmployeesAuth = () => {
//     return (
//         <Fragment>
//             <div>All Employees</div>
//         </Fragment>
//     )
// };

// const AllEmployeesNonAuth = () => {
//     return (
//         <Fragment>
//             <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
//                 <Link to="/SignIn">Sign In </Link>
//             </h1>
//         </Fragment>
//     )
// };

export default AllEmployees;