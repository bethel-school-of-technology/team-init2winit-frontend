
import React, { useState, useEffect } from 'react';
import { Form, Button, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import './login.css';
import axios from '../axios';


function Login({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return alert('MISSING INFORMATION')
        }

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const { data } = await axios.post('/login', { email, password }, config);

            localStorage.setItem('authToken', data.token);

            history.push('/');
        } catch (error) {
            console.log(error);
        }



        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Java Share</h1><br />
            <h3>Sign In</h3><br />
            <Form>
                <FormGroup id="email" controlId="formGroupEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </FormGroup>
                <FormGroup id="pass" controlId="formGroupPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>
                <Button id="subButton" variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Login

