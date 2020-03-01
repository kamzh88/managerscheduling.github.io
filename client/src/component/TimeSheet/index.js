import React, { Component, Fragment } from "react";
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import { TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save'
import API from '../../utils/API';

class TimeSheet extends Component {

    state = {
        isOpen: false,
        setIsOpen: false,
        results: [],
        date: '',
        shiftStart: '',
        shiftEnd: '',
        shiftID: ''
    }

    showModal = (event) => {
        // console.log(event);
        this.setState({ isOpen: true, setIsOpen: true, results: event, shiftID: event._id })
    }

    hideModal = () => {
        this.setState({ isOpen: false, setIsOpen: false })
    };

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    };

    deleteShift = (e) => {
        e.preventDefault();
        const { shiftEnd, shiftStart, date, shiftID } = this.state;
        // console.log(shiftID);
        API.deleteShift(shiftID).then(res => console.log("success"));

    }

    render() {

        const { date, shiftStart, shiftEnd, shiftID } = this.state;
        // console.log(this.state.shiftID);
        return (
            <Fragment>
                {this.props.data.map((shifts, index) => (
                    <button
                        starttime={shifts.StartTime}
                        key={index}
                        onClick={() => this.showModal({
                            _id: shifts._id,
                            StartTime: shifts.StartTime,
                            EndTime: shifts.EndTime
                        })}
                    >
                        <p> Date: {<Moment format="MM/DD/YYYY">{shifts.StartTime}</Moment>}</p>
                        <p> Start Shift: {<Moment format="h:mm:ss a">{shifts.StartTime}</Moment>}</p>
                        <p> Shift End: {<Moment format="h:mm:ss a">{shifts.EndTime}</Moment>}</p>
                        <br></br>
                    </button>
                ))}
                <Modal
                    show={this.state.isOpen}
                    size="md"
                    onHide={this.hideModal}
                    style={{ opacity: 1, paddingTop: "20%" }}
                >
                    <ModalHeader>
                        <ModalTitle>Edit Shifts</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form
                            style={{ display: "flex", flexDirection: "column" }}
                            onSubmit={this.onSubmit}
                        >
                            <TextField
                                required
                                style={{ marginBottom: 20 }}
                                id="date"
                                label="Select Date"
                                type="date"
                                defaultValue={date ? date : "2020-02-24"}
                                onChange={this.handleChange("date")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                required
                                style={{ marginBottom: 20 }}
                                id="shiftStart"
                                label="Start Time"
                                type="time"
                                defaultValue={shiftStart ? shiftStart : "11:00"}
                                onChange={this.handleChange("shiftStart")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 1800, // 5 min
                                }}
                            />
                            <TextField
                                required
                                style={{ marginBottom: 20 }}
                                id="shiftEnd"
                                label="End Time"
                                type="time"
                                defaultValue={shiftEnd ? shiftEnd : "23:00"}
                                onChange={this.handleChange("shiftEnd")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 1800, // 5 min
                                }}
                            />
                            <Button
                                style={{ marginBottom: 20 }}
                                type={"submit"}
                                fullWidth
                                variant={"contained"}
                                color={"primary"}
                                startIcon={<SaveIcon />}
                            // disabled={isInvalid}
                            >
                                Save
                            </Button>
                            <Button
                                style={{ marginBottom: 20 }}
                                fullWidth
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={this.deleteShift}
                            >
                                Delete
                             </Button>
                            <Button
                                variant="contained"
                                onClick={this.hideModal}
                            >
                                Close
                            </Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default TimeSheet;

