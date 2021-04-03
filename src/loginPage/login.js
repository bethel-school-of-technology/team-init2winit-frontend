
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
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
                <FormControl>
                <em>
                <HTMLBodyElement>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="or enter a username" />
                    </form>
                </HTMLBodyElement>
            </em>
            </FormControl>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )
}

export default login

