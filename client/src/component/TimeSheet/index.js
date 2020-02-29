import React, { Component, Fragment } from "react";
import Moment from 'react-moment';

class TimeSheet extends Component {

    render() {

        return (
            <div>
                <div>{this.props.data.map((shifts, index) => (
                    <button
                        key={index}
                    >
                        <p>
                            Date: {
                                <Moment format="MM/DD/YYYY">
                                    {shifts.StartTime}
                                </Moment>
                            }
                        </p>
                        <p>
                            Start Shift: {
                                <Moment format="h:mm:ss a">
                                    {shifts.StartTime}
                                </Moment>

                            }
                        </p>
                        <p>
                            Shift End: {
                                <Moment format="h:mm:ss a">
                                    {shifts.EndTime}
                                </Moment>
                            }
                        </p>
                        <br></br>
                    </button>
                ))}
                </div>
            </div>
        )
    }
}

export default TimeSheet;

