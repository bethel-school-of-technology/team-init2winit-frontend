import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Container, FormGroup } from 'react-bootstrap';
import axios from '../axios';
import './signup.css'

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
            <h1>Java Share</h1>
            <h3>Signup</h3>
            <form>
                <FormGroup>
                    <Row>
                        <Container>
                            <Row> <Col>Create a Username</Col>
                                <Form.Control
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }} />
                                <Col></Col>
                            </Row>
                        </Container>
                    </Row>
                </FormGroup>
                <Row>
                    <Col>
                        <Form.Control
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }} />
                    </Col>
                </Row>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={(e) => { submitHandler(e) }}>Sign up!</Button>
                    </Col>
                </Form.Group>

            </form>

        </div>
    )
}

export default Signup
