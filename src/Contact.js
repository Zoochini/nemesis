import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid>
            <br />
            <Row>
                <Col lg={{ span: 4, offset: 4 }}>
                    <Button variant="outline" href="mailto:nemesis-pro@outlook.com" block>Envoyez nous un mail !</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;