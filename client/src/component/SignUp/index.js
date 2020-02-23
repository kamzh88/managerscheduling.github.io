import React, { Component } from "react";
import { Typography, TextField, Button } from '@material-ui/core';
import Wrapper from "../Wrapper";
import { fireAuth } from "../Firebase";
import API from "../../utils/API";

class SignUp extends Component {

    state = {
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null,
        userName: ''
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, passwordOne, userName } = this.state;
        // console.log(email);
        return fireAuth.createUserWithEmailAndPassword(email, passwordOne).then(() => {
            this.setState({ email: '', passwordOne: '', passwordTwo: '' });
            fireAuth.onAuthStateChanged(user => {
                API.saveUser({
                    userName: userName,
                    uid: user.uid,
                    email: user.email,
                    userCreated: user.metadata.creationTime
                })
            })
            this.props.history.push('/home');

        })
            .catch(error => {
                this.setState({ error });
            })
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    render() {

        const { email, passwordOne, passwordTwo, error, userName } = this.state;

        const isInvalid = passwordOne !== passwordTwo;

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
                        type={"text"}
                        label={"Username"}
                        value={userName}
                        onChange={this.handleChange("userName")}
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
                        disabled={isInvalid}
                    >
                        Submit
                    </Button>
                    {error && <p>{error.message}</p>}
                </form>
            </Wrapper>
        )
    }
}

export default SignUp;