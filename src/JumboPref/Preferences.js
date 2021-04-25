import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Preferences.css';




function Preferences() {
    return (
        <div>
            <Jumbotron id="prefJumbo">
                <h1>Your Preferences</h1>
                <p>
                    Darkness: <br/>
                    Caffeine: <br/>
                    Sweetness: <br/>
                    Dairy: <br/>
                </p>
                <p>
                    <Button variant="primary">Edit</Button>
                </p>
            </Jumbotron>

        </div>
    )
}

export default Preferences
