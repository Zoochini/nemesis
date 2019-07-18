import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Accueil() {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="justify-content-center">
                    <h1>Bienvenue sur Nemesis</h1>
                    <hr />
                    <p>Petite présentation du site ( ou au coeurs des ptits fours)</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Accueil;