import React from 'react';
import { Row, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flux from './Flux.js';

class Stream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: this.props.match.params.id
        };
        this.updateChannel = this.updateChannel.bind(this);
    }

    updateChannel() {
        if(this.state)
        this.setState({ channel: this.props.match.params.id });
    }

    componentDidMount() {
        this.setState({ channel: this.props.match.params.id });
    }

    componentDidUpdate(){
    }

    render() {
        console.log(this.state.channel);
        return (
            <Container fluid>
                <Row>
                    <Nav id="stream-selector" fill variant="tabs" defaultActiveKey={this.state.channel}>
                        <Nav.Item>
                            <Link to="nemesisdirect">
                                <Nav.Link as="div" eventKey="nemesisdirect" onClick={this.updateChannel}>
                                    Nemesis-direct
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="loufokalov">
                                <Nav.Link as="div" eventKey="loufokalov" onClick={this.updateChannel}>
                                    Loufokalov
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="roigabydou">
                                <Nav.Link as="div" eventKey="roigabydou" onClick={this.updateChannel}>
                                    RoiGabydou
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    <Flux channel={this.props.match.params.id} />
                </Row>
            </Container>
        )
    }
}

export default Stream;