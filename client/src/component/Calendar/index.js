import React, { Component, Fragment } from "react";
import { TextField, Button, MenuItem } from '@material-ui/core';
import API from '../../utils/API';
import Wrapper from "../Wrapper";
import { Inject, ScheduleComponent, TimelineViews, Resize, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import "./styles/style.css";

class Calendar extends Component {

    state = {
        employees: [],
        id: '',
        date: '',
        shiftStart: '',
        shiftEnd: '',
        shifts: [],
        error: null,
    }

    componentDidMount() {
        this.loadEmployees();
        this.loadShifts();
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    }

    loadEmployees = () => {
        API.getEmployee(this.props.authUser.uid)
            .then(res =>
                this.setState({ employees: res.data })
            ).catch(err => console.log(err));
    }

    loadShifts = () => {
        API.getShifts(this.props.authUser.uid)
            .then(res =>
                this.setState({ shifts: res.data })
            ).catch(err => console.log(err));
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { id, date, shiftStart, shiftEnd } = this.state;
        let startDate = `${date}T${shiftStart}:00.000`;
        let endDate = `${date}T${shiftEnd}:00.000`;
        API.saveShifts({
            StartTime: startDate,
            EndTime: endDate,
            id: id,
            uid: this.props.authUser.uid,
        }).then(res => {
            this.setState({ id: '', date: '', shiftStart: '', shiftEnd: '' });
            this.loadShifts();
        }).catch(error => this.setState({ error }));
    }

    render() {

        const { employees, id, date, shiftStart, shiftEnd, shifts, error } = this.state;

        const isInvalid =
            id === '' ||
            date === '' ||
            shiftStart === '' ||
            shiftEnd === ``;

        return (
            <Fragment>
                <Wrapper>
                    <form style={{ display: "flex", flexDirection: "column" }}
                        onSubmit={this.onSubmit}
                    >
                        <TextField
                            name="employeeName"
                            required
                            style={{ marginBottom: 20 }}
                            select
                            label="Select"
                            value={id}
                            onChange={this.handleChange("id")}
                            helperText="Select an employee"
                        >
                            {employees.map(option => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.firstName} {option.lastName}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            style={{ marginBottom: 20 }}
                            id="date"
                            label="Select Date"
                            type="date"
                            value={date ? date : "2020-03-01"}
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
                            value={shiftStart ? shiftStart : "11:00"}
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
                            value={shiftEnd ? shiftEnd : "23:00"}
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
                            disabled={isInvalid}
                        >
                            Submit
                        </Button>
                        {error && <p>{error.message}</p>}
                    </form>
                </Wrapper>
                <div className='schedule-control-section'>
                    <div className='col-lg-12 control-section'>
                        <div className='control-wrapper'>
                            <ScheduleComponent
                                cssClass='timeline-resource'
                                height='650px'
                                width='100%'
                                startHour={'11:00'}
                                endHour={'24:00'}
                                workHours={{ start: '11:00', end: '23:59' }}
                                workDays={[0, 1, 2, 3, 4, 5, 6]}
                                currentView={"TimelineWeek"}
                                timeScale={{ interval: 60, slotCount: 1 }}
                                eventSettings={{
                                    dataSource: shifts,
                                }}
                                group={{ enableCompactView: false, resources: ['MeetingRoom'] }}
                            >
                                <ResourcesDirective>
                                    <ResourceDirective
                                        field='id'
                                        name='MeetingRoom'
                                        dataSource={employees}
                                        textField='firstName'
                                        idField='_id'
                                    >
                                    </ResourceDirective>
                                </ResourcesDirective>
                                <ViewsDirective>
                                    <ViewDirective option='TimelineDay' />
                                    <ViewDirective option='TimelineWeek' />
                                </ViewsDirective>
                                <Inject services={[TimelineViews, Resize]} />
                            </ScheduleComponent>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Calendar;