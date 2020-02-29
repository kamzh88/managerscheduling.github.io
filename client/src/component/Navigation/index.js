import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { fireAuth } from "../Firebase";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navigation = ({ authUser }) => {
    return (
        <div>{authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth authUser={authUser} />}</div>
    )
};

const NavigationAuth = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Manager Scheduling Application
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to={{
                            pathname: "/EditShifts",
                        }}> Edit Shifts
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to={{
                            pathname: "/AllEmployees",
                        }}>View Employees
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to={{
                            pathname: "/Home",
                        }}>Home</Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        onClick={() => fireAuth.signOut()}
                    >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

const NavigationNonAuth = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Manager Scheduling Application
</Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/SignUp">SignUp</Button>
                    <Button color="inherit" component={Link} to="/SignIn">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navigation;