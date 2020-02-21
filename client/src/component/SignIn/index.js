import React, { Component } from "react";
import { Typography, TextField, Button } from '@material-ui/core';
import Wrapper from "../Wrapper";
import { fireAuth } from "../Firebase";

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        error: null,
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        return fireAuth.signInWithEmailAndPassword(email, password).then(() => {
            this.setState({ email: '', password: '' });
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

        const { email, password, error } = this.state;

        return (
            <Wrapper>
                <Typography variant="h5" style={{ marginTop: 24, marginBottom: 24 }}>
                    Sign In Form
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
                        value={password}
                        onChange={this.handleChange("password")}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
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