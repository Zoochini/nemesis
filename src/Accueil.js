import React from 'react';
import { Jumbotron, Container, Row, Col, Carousel, Image } from 'react-bootstrap';

function Accueil() {
    const widthCarousel = window.innerWidth;
    const heightCarousel = window.innerHeight;

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Carousel>
                        <Carousel.Item>
                            <Image src="/nemesis-logo.svg" alt="First Slide" width={widthCarousel} height={heightCarousel}></Image>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="/nemesis-logo.svg" alt="Second Slide" width={widthCarousel} height={heightCarousel}></Image>S
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="/nemesis-logo.svg" alt="Third Slide" width={widthCarousel} height={heightCarousel}></Image>
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

export default Accueil;