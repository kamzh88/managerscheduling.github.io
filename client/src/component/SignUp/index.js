import React, { Component } from "react";
import { Typography, TextField, Button } from '@material-ui/core';
import Wrapper from "../Wrapper";
// import { fireAuth } from "";

class SignUp extends Component {

    state = {
        email: '',
        passwordOne: '',
        passwordTwo: '',
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, passwordOne } = this.state;
        console.log(email);
        // return fireAuth.signInWithEmailAndPassword(email, passwordOne).then(() => {
        //     console.log("Success")
        // })
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    render() {

        const { email, passwordOne, passwordTwo } = this.state;

        return (
            <Wrapper>
                <Typography variant="h5" style={{ marginTop: 24, marginBottom: 24 }}>
                    Sign Up Form
                </Typography>
                <form
                    style={{ display: "flex", flexDirection: "column" }}
                    onSubmit={this.onSubmit}
                >
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
                        type={"password"}
                        label={"Password"}
                        value={passwordOne}
                        onChange={this.handleChange("passwordOne")}
                    />
                    <TextField
                        style={{ marginBottom: 24 }}
                        variant={"outlined"}
                        required
                        type={"password"}
                        label={"Confirm Password"}
                        value={passwordTwo}
                        onChange={this.handleChange("passwordTwo")}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Submit
                    </Button>
                </form>
            </Wrapper>
        )
    }
}

export default SignUp;