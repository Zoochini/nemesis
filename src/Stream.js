import React from 'react';
import { ResponsiveEmbed, Row, Container, Navbar, Nav } from 'react-bootstrap';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Stream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetID: 'twitch-embed',
            width: 940,
            height: 480,
            channel: 'loufokalov',
            theme: 'dark',
        };
    }

    componentDidMount() {
        // eslint-disable-next-line no-unused-vars
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.state.targetID, { ...this.state });
        });
        document.body.appendChild(script);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Navbar>
                        <Nav fill variant="tabs" defaultActiveKey="/nemesis-direct">
                            <Nav.Item>
                                <Nav.Link href="/nemesis-direct">Nemesis-direct</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/loufokalov">Loufokalov</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <ResponsiveEmbed aspectRatio="21by9"
                        children={<div id="twitch-embed"></div>}>
                    </ResponsiveEmbed>
                </Row>
            </Container>
        )
    }
}

export default Stream;