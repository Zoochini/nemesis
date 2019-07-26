import React from 'react';
import { Jumbotron, Container, Row, Col, Carousel, Image } from 'react-bootstrap';

class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widthCarousel: window.innerWidth,
            heightCarousel: window.innerHeight
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.updateCarouselSize(),
            10
        );
    }

    updateCarouselSize(){
        this.setState({widthCarousel : window.innerWidth});
        this.setState({heightCarousel : window.innerHeight});
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/nemesis-ban.svg" alt="First Slide" width={this.state.widthCarousel} height={this.state.heightCarousel}></Image>
                                <Carousel.Caption>
                                    <h3>Bienvenue</h3>
                                    <p>Au coeur des petits four</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/nemesis-logo.svg" alt="Second Slide" width={this.state.widthCarousel} height={this.state.heightCarousel}></Image>S
                            <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/nemesis-logo.svg" alt="Third Slide" width={this.state.widthCarousel} height={this.state.heightCarousel}></Image>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </ div>
        )
    }
}

export default Accueil;