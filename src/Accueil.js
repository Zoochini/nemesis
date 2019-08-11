import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

class Accueil extends React.Component {
    constructor(props){
        super(props);
        this.updateMenu = this.updateMenu.bind(this);
    }

    componentDidMount(){
        let menu = document.getElementById("menu").style;
        menu.visibility = 'hidden';
        menu.display = 'none';
        document.addEventListener("scroll", this.updateMenu);
    }

    componentWillUnmount(){
        let menu = document.getElementById("menu").style;
        menu.visibility = 'visible';
        menu.display = 'flex';
        document.removeEventListener("scroll", this.updateMenu);
    }

    updateMenu(){
        let menu = document.getElementById("menu").style;
        if(window.scrollY !== 0){
            menu.visibility = 'visible';
            menu.display = 'flex';
        }else{
            menu.visibility = 'hidden';
            menu.display = 'none';
        }
    }

    render() {
        return (
            <div id="Accueil">
                <Container fluid>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/nemesis-ban.svg" alt="First Slide"
                                    width={this.props.width} height={this.props.height}>
                                </Image>
                                <Carousel.Caption>
                                    <h3>Bienvenue</h3>
                                    <p>Au coeur des petits fours</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/twitch-logo.svg" alt="Second Slide"
                                    width={this.props.width} height={this.props.height}>
                                </Image>
                                <Carousel.Caption>
                                    <h3>Stream</h3>
                                    <p>Allez voir ça coûte rien</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/nemesis-logo.svg" alt="Third Slide"
                                    width={this.props.width} height={this.props.height}>
                                </Image>
                                <Carousel.Caption>
                                    <h3>Nous contacter</h3>
                                    <p>Parce qu'il le faut bien</p>
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