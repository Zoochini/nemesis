import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

function Loading() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image id="loading-image" src="/nemesis-logo.svg" alt="loading..." fluid roundedCircle></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default Loading;