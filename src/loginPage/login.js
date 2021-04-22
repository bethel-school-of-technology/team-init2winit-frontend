
import React, { useState } from 'react';
import { Form, Button, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import axios from '../axios';


function Login({ history }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            return alert('MISSING INFORMATION')
        }

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const { data } = await axios.post('/login', { username, password }, config);

            localStorage.setItem('authToken', data.token);
            localStorage.setItem('username', username);

            history.push('/');
        } catch (error) {
            console.log(error);
        }



        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <h1>Java Share</h1><br />
            <h3>Sign In</h3><br />
            <Form>
                <FormGroup id="username" controlId="formGroupUsername">
                    <FormLabel>Username</FormLabel>
                    <FormControl type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }} />
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
            <p>Don't have an account?<Link to='/register'>Register</Link></p>
        </div>
    )
}

export default Login

