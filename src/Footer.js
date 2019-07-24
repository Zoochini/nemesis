import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid>
            <footer>
                <Navbar bg="light" variant="light" fixed="bottom">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://www.facebook.com/N%C3%A9m%C3%A9sis-1582053825444049/">
                                <Image src="//logo.clearbit.com/facebook.com?size=28&greyscale=true" alt="facebook" roundedCircle></Image>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://twitter.com/NemesisproCM">
                                <Image src="//logo.clearbit.com/twitter.com?size=28&greyscale=true" alt="twitter" roundedCircle></Image>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </footer>
        </Container>
    )
}

export default Footer;