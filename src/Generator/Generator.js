import React from 'react';
import './generator.css';
import { Jumbotron, Spinner,Button } from 'react-bootstrap';

function Generator() {
    return (
        <div>
            <h2>Your drink of choice is...</h2>
            <Jumbotron id="drinkJumbo">
                <Spinner animation="border" role="status" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <h1>Insert/state beverage name</h1>
                <p>
                    This is where we would place a brief description (optional).
                </p>
                <p>
                    <Button variant="primary">Ordered!</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Generator
