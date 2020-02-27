import React, { Component, Fragment } from "react";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, Resize, DragAndDrop, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import "./styles/style.css";

class Calendar extends Component {

    state = {
        ownerData: [
            { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
            { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
            { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
            { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
            { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
            { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
            { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
            { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
            { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
            { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
        ],
        data: [{
            Id: 2,
            Subject: 'Meeting',
            StartTime: new Date(2020, 2, 26, 10, 0),
            EndTime: new Date(2020, 2, 26, 12, 30),
            IsAllDay: false,
            Status: 'Completed',
            Priority: 'High'
        }]
    }

    onRenderCell(args) {
        if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
            let target = args.element.querySelector('.e-resource-text');
            target.innerHTML = '<div class="name">Name</div><div class="type">Position</div>';
        }
    }

    render() {
        return (
            <div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent
                            cssClass='timeline-resource'
                            ref={schedule => this.scheduleObj = schedule}
                            height='650px'
                            width='100%'
                            startHour={'11:00'}
                            endHour= {'24:00'}
                            workHours={{ start: '11:00', end: '23:59' }}
                            workDays={ [0, 1, 2, 3, 4, 5, 6] } 
                            currentView={"TimelineWeek"}
                            timeScale={{ interval: 120, slotCount: 1 }}
                            renderCell={this.onRenderCell}
                            group={{ enableCompactView: false, resources: ['MeetingRoom'] }}
                        >
                            <ResourcesDirective>
                                <ResourceDirective
                                    name='MeetingRoom'
                                    dataSource={this.state.ownerData}
                                    textField='text'
                                    idField='id'
                                    colorField='color'
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