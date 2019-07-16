import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <Navbar bg="light" variant="light" fixed="bottom">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://www.facebook.com/N%C3%A9m%C3%A9sis-1582053825444049/">
                                <img src="//logo.clearbit.com/facebook.com?size=32" alt="facebook"></img>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://twitter.com/NemesisproCM">
                                <img src="//logo.clearbit.com/twitter.com?size=32" alt="twitter"></img>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </footer>
        </div>
    )
}

export default Footer;