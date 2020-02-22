import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';

const Home = ({ authUser }) => {
    return (
        <div>{authUser ? <HomeAuth authUser={authUser} /> : <HomeNonAuth authUser={authUser} />}</div>
    )
};

class HomeAuth extends Component {

    render() {
        // console.log(this.props.authUser);
        return (
            <div>
                <Button
                    color="inherit"
                    component={Link}
                    to={{
                        pathname: "/AllEmployees",
                        // state: {
                        //     authUser: this.props.authUser
                        // }
                    }}>All Employees</Button>
            </div>
        )
    }
};

const HomeNonAuth = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
                <Link to="/SignIn">Sign In </Link>
            </h1>
        </Fragment>
    )
};

export default Home;