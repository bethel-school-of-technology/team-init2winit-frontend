
import React, { useState } from 'react';
import { Form, Button, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import axios from '../axios';
import CoffeeLogo from '../nav/coffeelogo.png';

function Login() {

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

            window.location = '/';
        } catch (error) {
            console.log(error);
        }



        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <img src={CoffeeLogo} />
            <Form>
                <FormGroup id="username" controlId="formGroupUsername">

                    <FormControl type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }} />
                </FormGroup>
                <FormGroup id="pass" controlId="formGroupPassword">

                    <FormControl
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>
                <Button id="subButton" variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                    Log In!
                </Button>
            </Form>
            <p className="text">Don't have an account?<Link to='/register'> Register</Link></p>
        </div>
    )
}

export default Login

