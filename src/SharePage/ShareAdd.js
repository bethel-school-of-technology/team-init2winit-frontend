import React, { useState, useEffect } from 'react'
import NavComponent from '../nav/NavComponent'
import { Form, Button, FormGroup } from 'react-bootstrap';
import axios from '../axios';

function ShareAdd({ history }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!name || !desc || !image) {
            return alert('MISSING INFORMATION')
        }

        const user = localStorage.getItem('username');

        const newMessage = {
            name,
            desc,
            image,
            user
        };

        console.log(newMessage);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }

        try {
            const { data } = await axios.post('/share', { name, desc, image, user }, config);
            console.log(data);

            history.push('/share');
        } catch (error) {
            console.log(error);
        }


        setName('');
        setDesc('');
        setImage('');
    }
    return (
        <div>
            <NavComponent />
            <div className="add-share-container">
                <h1 style={{ color: 'white' }}>Add post</h1>
                <FormGroup id="username">
                    <Form.Control id="name"
                        placeholder="Name of Coffee"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </FormGroup>

                <FormGroup id="username">
                    <Form.Control as="textarea" id="desc"
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }} />
                </FormGroup>

                <FormGroup id="username">
                    <Form.Control id="image"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }} />
                </FormGroup>

                <Button id="subButton" type="submit" onClick={(e) => { submitHandler(e) }}>Share!</Button>

            </div>

        </div>
    )
}

export default ShareAdd
