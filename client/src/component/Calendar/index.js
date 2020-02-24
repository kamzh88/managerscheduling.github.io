import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// const Calendar = ({ authUser }) => {
//     console.log(authUser)
//     return (
//         <div>{authUser ? <CalendarAuth authUser={authUser} /> : <CalendarNonAuth authUser={authUser} />}</div>
//     )
// };

class Calendar extends Component {

    render() {

        return (
            <div>
                <h1>Calendar</h1>
            </div>
        )
    }
};

// const CalendarNonAuth = () => {
//     return (
//         <Fragment>
//             <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
//                 <Link to="/SignIn">Sign In hi</Link>
//             </h1>
//         </Fragment>
//     )
// };

export default Calendar;