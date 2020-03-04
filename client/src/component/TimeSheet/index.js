import React, { Component, Fragment } from "react";
import Moment from 'react-moment';
import 'moment-timezone';

class TimeSheet extends Component {

    render() {

        return (
            <Fragment>
                {this.props.data.map((shifts, index) => (
                    <button
                        starttime={shifts.StartTime}
                        key={index}
                        onClick={() => this.props.showModal({
                            _id: shifts._id,
                            StartTime: shifts.StartTime,
                            EndTime: shifts.EndTime
                        })}
                    >
                        <p> Date: {<Moment format="MM/DD/YYYY" tz="America/New_York">{shifts.StartTime}</Moment>}</p>
                        <p> Start Shift: {<Moment format="h:mm:ss a" tz="America/New_York">{shifts.StartTime}</Moment>}</p>
                        <p> Shift End: {<Moment format="h:mm:ss a" tz="America/New_York">{shifts.EndTime}</Moment>}</p>
                        <br></br>
                        {this.props.children.map((shifts, index) => (
                            <p key={index}>{shifts.StartTime}</p>
                        ))}
                    </button>
                ))}
            </Fragment>
        )
    }
}

export default TimeSheet;

{/* <p> Shift End: {<Moment format="h:mm:ss a" tz="America/New_York">{shifts.EndTime}</Moment>}</p> */}