import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import Wrapper from "../Wrapper";

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        submitting: false
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { email, password } = this.state;
        if (onSubmit) {
            this.setState({ submitting: true });
            onSubmit(email, password);
        }
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    render() {

        const { email, password, submitting } = this.state;

        return (
            <Wrapper>
                <Typography variant="h5" style={{ marginTop: 24, marginBottom: 24 }}>
                    Sign Up Form
                </Typography>
                <form
                    style={{ display: "flex", flexDirection: "column" }}
                    onSubmit={this.handleSubmit}
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
                        {submitting ? (
                            <CircularProgress
                                style={{ color: "#fff" }}
                                color={"inherit"}
                                size={1}
                            />
                        ) : (
                                "Submit"
                            )}
                    </Button>
                </form>
            </Wrapper>
        )
    }
}

export default SignUp;