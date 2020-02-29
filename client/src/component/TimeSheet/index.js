import React, { Component, Fragment } from "react";
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const TimeSheet = (props) => {


    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <Fragment>
            <div>{props.data.map((shifts, index) => (
                <button
                    onClick={showModal}
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
            <button >Display Modal</button>
            <Modal
                show={isOpen}
                size="lg"
                onHide={hideModal}
                style={{ opacity: 1, paddingTop: "20%"}}
            >
                <ModalHeader>
                    <ModalTitle>{console.log(...props)}</ModalTitle>
                </ModalHeader>
                <ModalBody>asdfasdf</ModalBody>
                <ModalFooter>This is the footer</ModalFooter>
            </Modal>
        </Fragment>
    )

}

export default TimeSheet;

