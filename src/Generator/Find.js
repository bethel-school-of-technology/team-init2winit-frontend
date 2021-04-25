import React from 'react';
import './generator.css';
import { Jumbotron, Button } from 'react-bootstrap';
import NavComponent from '../nav/NavComponent';
import { Link } from 'react-router-dom';

function Find() {

    return (

        <div>
            <NavComponent />

            <Jumbotron id="drinkJumbo">
                <Link to='/generator'><Button className="findBtn" variant="primary">Find A Cup</Button></Link>
            </Jumbotron>
        </div>
    )
}

export default Find
