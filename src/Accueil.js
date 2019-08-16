import React from 'react';
import { Container, Row, Col, Carousel, Image, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jumbotronIsVisible: false
        }
        this.updateMenu = this.updateMenu.bind(this);
        this.updateJumbotron = this.updateJumbotron.bind(this);
    }

    componentDidMount() {
        let menu = document.getElementById("menu").style;
        menu.visibility = 'hidden';
        menu.display = 'none';
        document.addEventListener("scroll", this.updateMenu);
        document.addEventListener("scroll", this.updateJumbotron);
    }

    componentWillUnmount() {
        let menu = document.getElementById("menu").style;
        menu.visibility = 'visible';
        menu.display = 'flex';
        document.removeEventListener("scroll", this.updateMenu);
        if (!this.jumbotronIsVisible) {
            document.removeEventListener("scroll", this.updateJumbotron);
        }
    }

    /* Mise à jour la visibilité du menu sur la page d'accueil du site */
    updateMenu() {
        let menu = document.getElementById("menu");
        if (window.scrollY !== 0 && menu.style.visibility !== 'visible') {
            menu.style.visibility = 'visible';
            menu.style.display = 'flex';
            let animation = [
                { opacity: 0 },
                { opacity: 1 }
            ];
            menu.animate(animation, {
                duration: 1000,
                easing: 'ease-out',
            }
            );
        } else if (window.scrollY === 0 && menu.style.visible !== 'hidden') {
            let animation = [
                { opacity: 1 },
                { opacity: 0 }
            ];
            menu.animate(animation, {
                duration: 500,
                easing: 'ease-in',
            }
            );
            setTimeout(() => {
                menu.style.visibility = 'hidden';
                menu.style.display = 'none';
            }, 500);
        }
    }

    /* Mise à jour de l'apparition des paragraphes de la page */
    updateJumbotron() {

        //Obtention des coordonnées de l'élément à afficher
        const jumbotrons = document.querySelectorAll('.jumbotron');
        var rect = jumbotrons[0].getBoundingClientRect();

        //Vérification de la présence de l'objet dans la vue
        if (rect.bottom <= window.scrollY) {
            //Définition des animations

            /* Animation du jumbotron id="description" */
            let animationDescription = [
                { transform: 'translate(0, -200px)', opacity: '0.0' },
                { transform: 'translate(0, 0)', opacity: '1' }
            ];
            /* Animation du jumbotron id="contact" */
            let animationContact = [
                { transform: 'translate(0, 200px)', opacity: '0.0' },
                { transform: 'translate(0, 0)', opacity: '1' }
            ]
            /* Parametres de transition */
            let transition = {
                duration: 1000,
                easing: 'ease-in-out',
                iteration: 1
            }
            let description = document.getElementById("description");
            let contact = document.getElementById("contact");

            //Mise à jour de la visibilité et animation des jumbotrons
            this.setState({ jumbotronIsVisible: true });
            document.removeEventListener("scroll", this.updateJumbotron);
            description.style.visibility = 'visible';
            description.animate(animationDescription, transition);
            contact.style.visibility = 'visible';
            document.getElementById("contact").animate(animationContact, transition);
        }
    }

    render() {
        return (
            <Container id="Accueil" fluid>
                <Row id="Accueil">
                    <Carousel>
                        <Carousel.Item id="slide1">
                            <Image src="/nemesis-ban.svg" alt="First Slide"
                                width={this.props.width} height={this.props.height}>
                            </Image>
                            <Carousel.Caption>
                                <h1>Bienvenue</h1>
                                <p>Au coeur des petits fours</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id="slide2">
                            <Image src="/twitch-logo.svg" alt="Second Slide"
                                width={this.props.width} height={this.props.height}>
                            </Image>
                            <Link to="/stream/nemesisdirect">
                                <Carousel.Caption>
                                    <h1>Stream</h1>
                                    <p>Allez voir ça coûte rien</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item id="slide3">
                            <Image src="/nemesis-logo.svg" alt="Third Slide"
                                width={this.props.width} height={this.props.height}>
                            </Image>
                            <Carousel.Caption>
                                <h1>Nous contacter</h1>
                                <p>Parce qu'il le faut bien</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <Jumbotron id="description">
                            <h2>Qui sommes-nous ?</h2>
                            <p>Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium sportularum,
                            anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet,
                            et si digesto plene consilio id placuerit fieri,
                            is adhibetur qui pro domibus excubat aurigarum aut artem tesserariam profitetur aut secretiora quaedam se nosse confingit.</p>
                        </Jumbotron>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 7 }}>
                        <Jumbotron id="contact">
                            <h2>Contactez nous !</h2>
                            <p>Et est admodum mirum videre plebem innumeram mentibus ardore quodam infuso cum dimicationum curulium eventu pendentem.
                            haec similiaque memorabile nihil vel serium agi Romae permittunt.
                            ergo redeundum ad textum.</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Accueil;