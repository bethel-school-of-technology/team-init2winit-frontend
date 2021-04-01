
import React, { useState } from 'react';
import './loginPage.css';

function login() {
    const [name, setName] = useState('John')

    return (
        <div>
            <h1>Java Share</h1>
            <h3>Sign In</h3>
            
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )
}

export default login

