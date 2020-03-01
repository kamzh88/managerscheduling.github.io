import React, { Component, Fragment } from "react";
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class TimeSheet extends Component {

    state = {
        isOpen: false,
        setIsOpen: false,
        results: []
    }

    showModal = (event) => {
        this.setState({ isOpen: true, setIsOpen: true, results: event })
    }

    hideModal = () => {
        this.setState({ isOpen: false, setIsOpen: false })
    };

    render() {
        console.log(this.state.results)
        return (
            <Fragment>
                {this.props.data.map((shifts, index) => (
                    <button
                        key={index}
                        onClick={() => this.showModal({
                            _id: shifts._id,
                            StartTime: shifts.StartTime,
                            EndTime: shifts.EndTime
                        })}
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

                <Modal
                    show={this.state.isOpen}
                    size="lg"
                    onHide={this.hideModal}
                    style={{ opacity: 1, paddingTop: "20%" }}
                >
                    <ModalHeader>
                        <ModalTitle>Edit Shifts</ModalTitle>
                    </ModalHeader>
                    <ModalBody>{}
                            
                    </ModalBody>
                    <ModalFooter>This is the footer</ModalFooter>
                </Modal>
            </Fragment>
        )
    }

}

export default TimeSheet;

