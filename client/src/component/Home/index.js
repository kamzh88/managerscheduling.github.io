import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

const Home = ({ authUser }) => {
    return (
        <div>{authUser ? <HomeAuth authUser={authUser} /> : <HomeNonAuth authUser={authUser} />}</div>
    )
};

class HomeAuth extends Component {
    render() {
        return (
            <div>Authenticated User</div>
        )
    }
};

const HomeNonAuth = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Please { }
            <Link to="/SignIn">Sign In </Link>
            </h1>
        </Fragment>
    )
};

export default Home;