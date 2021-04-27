import React, { useState, useEffect } from 'react';
import './SharePage.css';
import NavComponent from '../nav/NavComponent';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../axios';

function SharePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        /*
                if (!localStorage.getItem('authToken')) {
                    history.push('/login')
                } */

        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }

            try {
                const { data } = await axios.get('/share', config);
                console.log(data);
                setData(data);
                console.log(data);
            } catch (error) {
                localStorage.removeItem('authToken');
                localStorage.removeItem('username');
            }
        }
        fetchPrivateData();
    }, [])
    console.log(data);
    return (
        <div>
            <NavComponent />

            <div className="share-container">
                <div className="messages">
                    {data.map((message) => {
                        return <div className="message">
                            <div className="left">
                                <h4>{message.name}</h4>
                                <img src={message.image} />

                            </div>
                            <div className="right">
                                <h3>{message.user}<span> {message.time}</span></h3>
                                <p>{message.desc}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="share-btn">
                    <Link to="/share-add"><Button>Share Now!</Button></Link>
                </div>

            </div>

        </div>
    )
}

export default SharePage
