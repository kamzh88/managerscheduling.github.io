import React, { Fragment } from "react";
import { Jumbotron, Container, Card, Row, Col } from 'react-bootstrap'

const Landing = () => {
    return (
        <div style={{ overflowY: 'scroll', marginBottom: '10%', height: 700 }}>
            <Jumbotron fluid style={{ height: 250 }}>
                <Container>
                    <h1>Employee Management Application</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={4} md={6}>
                        <Card style={{ backgroundColor: '#3f51b5', color: "white", margin: 10, padding: 5, height: 220, display: 'flex' }}>
                            <Container>
                                <Card.Title style={{ textAlign: 'center', margin: 'auto', width: '80%', padding: 10 }}>
                                    <h2>Help organize and store all your employees information into one area</h2>
                                </Card.Title>
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={4} md={6}>
                        <Card style={{ backgroundColor: '#3f51b5', color: "white", margin: 10, padding: 5, height: 220, display: 'flex' }}>
                            <Container>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center', margin: 'auto', width: '80%', padding: 10 }}>
                                        <h2>An easy to use calendar where you can manage your employees weekly schedule.</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing;