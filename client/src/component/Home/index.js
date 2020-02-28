import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AddShifts from '../AddShifts';
import Calendar from "../Calendar";

const Home = ({ authUser }) => {
    return (
        <div>{authUser ? <HomeAuth authUser={authUser} /> : <HomeNonAuth authUser={authUser} />}</div>
    )
};

class HomeAuth extends Component {

    render() {

        return (
            <div>
                {/* <Button
                    style={{ marginTop: 20, marginLeft: 50 }}
                    variant="contained"
                    color="default"
                    component={Link}
                    to={{
                        pathname: "/AllEmployees",
                    }}>View Employees
                </Button> */}
                <AddShifts
                    authUser={this.props.authUser}
                />
                {/* <Calendar 
                    authUser={this.props.authUser}
                /> */}
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