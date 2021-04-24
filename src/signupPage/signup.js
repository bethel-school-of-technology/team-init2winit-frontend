import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Container, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../axios';
import './signup.css';
import CoffeeLogo from '../nav/coffeelogo.png';

function Signup({ history }) {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/');
        }
    }, [history]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!username || !firstName || !lastName || !email || !password) {
            return alert('MISSING INFORMATION')
        }

        const newUser = {
            username,
            firstName,
            lastName,
            email,
            password
        };

        console.log(newUser);

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post('/register', { username, firstName, lastName, email, password }, config);
            console.log(data);
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('authToken', username);

            history.push('/');
        } catch (error) {
            console.log(error);
        }


        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <img src={CoffeeLogo} />

            {/*<Container> */}
            <FormGroup id="username">
                <Form.Control id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
            </FormGroup>

            <FormGroup id="username" controlId="formGroupUsername">
                <Form.Control id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </FormGroup>

            <FormGroup id="username" controlId="formGroupUsername">
                <Form.Control id="lastName" placeholder="Last name"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }} />
            </FormGroup>

            <FormGroup id="username" controlId="formGroupUsername">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
            </FormGroup>


            <FormGroup id="username" controlId="formGroupUsername">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </FormGroup>

            <Button id="subButton" type="submit" onClick={(e) => { submitHandler(e) }}>Register!</Button>

            {/* </Container> */}

            <p className="text">Already have an account?<Link to='/login'> Login</Link></p>
        </div>
    )
}

export default Signup
