import React from "react";
import { Jumbotron, Container } from 'react-bootstrap'

const Landing = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Employee Management Application</h1>
                <p>
                    Organize your employee information to one area.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Landing;