import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container id="footer" fluid>
            <Row>
                <Col></Col>
                <Col xs="auto, order: 12">
                    <a href="https://www.facebook.com/N%C3%A9m%C3%A9sis-1582053825444049/">
                        <Image src="//logo.clearbit.com/facebook.com?size=28&greyscale=true" alt="facebook" roundedCircle></Image>
                    </a>
                    <a href="https://twitter.com/NemesisproCM">
                        <Image src="//logo.clearbit.com/twitter.com?size=28&greyscale=true" alt="twitter" roundedCircle></Image>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;