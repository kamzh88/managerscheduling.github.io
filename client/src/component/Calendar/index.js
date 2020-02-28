import React, { Component, Fragment } from "react";
import API from '../../utils/API';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, Resize, DragAndDrop, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import "./styles/style.css";

class Calendar extends Component {

    state = {
        employees: [],
        shifts: []
    }

    componentDidMount() {
        this.loadEmployees();
        this.loadShifts();
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

    render() {
        console.log(this.state.shifts)

        return (
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
                                dataSource: this.state.shifts,
                                timezone: "serverTimezoneOffset"
                            }}
                            group={{ enableCompactView: false, resources: ['MeetingRoom'] }}
                        >
                            <ResourcesDirective>
                                <ResourceDirective
                                    field='id'
                                    name='MeetingRoom'
                                    dataSource={this.state.employees}
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
        )
    }
}

export default Calendar;