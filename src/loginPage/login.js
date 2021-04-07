
import React, { useState, useEffect } from 'react';
import { Form, Button, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import './login.css';
import axios from '../axios';


function Login() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!email || !username || !password) {
            return alert('MISSING INFORMATION')
        }
        const user = {
            email,
            username,
            password
        };

        console.log(user);

        setEmail('');
        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <h1>Java Share</h1><br />
            <h3>Sign In</h3><br />
            <Form>
                <FormGroup controlId="formGroupEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Username:</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="or enter a username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }} />

                </FormGroup>
                <FormGroup controlId="formGroupPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Login

