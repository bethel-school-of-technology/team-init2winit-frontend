import { Row } from 'react-bootstrap';
import { Container, Col, Button, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';

function signup() {

    return (
        <div>
            <h1>Java Share</h1>
            <h3>Signup</h3>
            <form>

                <container>               
                    <Row>
                        <Container>
                            <Row> <Col>Create a Username</Col>
                                <Form.Control placeholder="username" />
                                <Col></Col>
                            </Row>
                        </Container>
                    </Row>       
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" /> 
                        </Col>
                    </Row>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                           <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign up!</Button>
                        </Col>
                    </Form.Group>
                </container>
            </form>    
        </div>
    )
}

export default signup
