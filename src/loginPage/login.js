
import React from 'react';
import { Form, Button, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import './login.css';


function login() {

    return (
        <div>
            <h1>Java Share</h1><br/>
            <h3>Sign In</h3><br/>
            
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <FormControl>
                <em>
                
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="or enter a username" />
                </form>
                
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

