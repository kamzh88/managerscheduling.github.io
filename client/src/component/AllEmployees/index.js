import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import TimeSheet from "../TimeSheet";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save'

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll',
        error: null
    }
}

const AllEmployees = ({ authUser }) => {
    return (
        <div>{authUser ? <AllEmployeesAuth authUser={authUser} /> : <AllEmployeesNonAuth />}</div>
    )
};

class AllEmployeesAuth extends Component {

    state = {
        firstName: '',
        phoneNumber: '',
        email: '',
        position: '',
        employees: [],
        shifts: [],
        isOpen: false,
        setIsOpen: false,
        results: [],
        date: '',
        shiftStart: '',
        shiftEnd: '',
        shiftID: '',
        error: null
    }

    componentDidMount() {
        this.loadEmployees();
        this.loadShifts();
    }

    loadShifts = () => {
        API.getShifts(this.props.authUser.uid)
            .then(res =>
                this.setState({ shifts: res.data })
            ).catch(error => this.setState({ error }));
    }

    loadEmployees = () => {
        API.getEmployee(this.props.authUser.uid)
            .then(res => {
                this.setState({
                    employees: res.data,
                    shifts: this.state.shifts,
                });
            })
            .catch(error => this.setState({ error }));
    }


    showModal = (event) => {
        this.setState({ isOpen: true, setIsOpen: true, results: event, shiftID: event._id })
    }

    hideModal = () => {
        this.setState({ isOpen: false, setIsOpen: false })
    }

    deleteShift = (e) => {
        e.preventDefault();
        const { shiftID } = this.state;
        API.deleteShift(shiftID).then(res => {
            this.setState({ isOpen: false, setIsOpen: false });
            this.loadShifts();
        }).catch(error => this.setState({ error }));
    }

    onSubmit = e => {
        e.preventDefault();
        const { authUser } = this.props;
        const { firstName, phoneNumber, email, position } = this.state;
        API.saveEmployee({
            firstName: firstName,
            phoneNumber: phoneNumber,
            email: email,
            position: position,
            uid: authUser.uid
        }).then(res => {
            this.setState({ firstName: '', phoneNumber: '', email: '', position: '' })
            this.loadEmployees()
        }).catch(error => {
            this.setState({ error, firstName: '', phoneNumber: '', email: '', position: '' })
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { shiftEnd, shiftStart, date, shiftID } = this.state;
        let startDate = `${date}T${shiftStart}:00.000`;
        let endDate = `${date}T${shiftEnd}:00.000`;
        API.updateShift({
            StartTime: startDate,
            EndTime: endDate,
        }, {
            shiftID
        }).then(res => {
            this.setState({ isOpen: false, setIsOpen: false });
            this.loadShifts();
        }).catch(error => this.setState({ error }));
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    render() {

        const { firstName, phoneNumber, email, position, employees } = this.state;
        const { date, shiftStart, shiftEnd, error } = this.state;
        const isInvalid =
            firstName === '' ||
            phoneNumber === `` ||
            email === '' ||
            position === '';

        const isInvalidTwo =
            date === '' ||
            shiftStart === '' ||
            shiftEnd === '';

        return (

            <Fragment>
                <Wrapper>
                    <Typography variant="h5" style={{ marginTop: 24, marginBottom: 24 }}>
                        Add Employees Form
                    </Typography>
                    <form
                        style={{ display: "flex", flexDirection: "column" }}
                        onSubmit={this.onSubmit}
                    >
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"text"}
                            label={"First Name"}
                            value={firstName}
                            onChange={this.handleChange("firstName")}
                        />
                        <TextField
                            style={{ marginBottom: 24 }}
                            variant={"outlined"}
                            required
                            type={"text"}
                            placeholder="(888)888-8888"
                            label={"Phone Number"}
                            value={phoneNumber}
                            onChange={this.handleChange("phoneNumber")}
                        />
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
                            type={"text"}
                            label={"Position Name"}
                            value={position}
                            onChange={this.handleChange("position")}
                        />
                        <Button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                            disabled={isInvalid}
                        >
                            Submit
                    </Button>
                        {error && <p>{error.message}</p>}
                    </form>
                </Wrapper>
                <div style={styles.Card}>
                    <h1>Employee List</h1>
                    {employees.map((employee, index) => (
                        <Card
                            key={index}
                            variant="outlined"
                            style={{ width: "auto", margin: 20 }}
                        >
                            <div
                                style={{ overflow: "auto", padding: 10 }}
                            >
                                <p>Name: {employee.firstName} </p>
                                <p>Position: {employee.position}</p>
                                <p>Phone Number: {employee.phoneNumber}</p>
                                <p>Email: {employee.email}</p>
                                <p>Shifts:</p>
                                <TimeSheet
                                    data={this.state.shifts.filter((shift) => (shift.id === employee._id))}
                                    showModal={this.showModal}
                                >
                                    {this.state.shifts.filter((shift) => (shift.id === employee._id))}
                                </TimeSheet>
                            </div>
                        </Card>
                    ))}
                </div>
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
                            onSubmit={this.handleFormSubmit}
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
                                disabled={isInvalidTwo}
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

                            {error && <p>{error.message}</p>}
                        </form>
                    </ModalBody>
                </Modal>
            </Fragment >

        )
    }
};



const AllEmployeesNonAuth = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Please {}
                <Link to="/SignIn">Sign In</Link>
            </h1>
        </Fragment>
    )
};

export default AllEmployees;
