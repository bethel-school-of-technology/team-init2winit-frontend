import React, { useState, useEffect } from 'react';
import './homePage.css';
import NavComponent from '../nav/NavComponent';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { Button } from 'react-bootstrap';

const username = localStorage.getItem('username');

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        /*
                if (!localStorage.getItem('authToken')) {
                    history.push('/login')
                } */

        const fetchPrivateData = async () => {
            const config = {
                params: {
                    username
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }

            try {
                const { data } = await axios.get('/', config);
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

    return (
        <div>
            <NavComponent />
            <div className="container">
                <h1>Welcome {username}!</h1>
                <h2>Your Preferences Are:</h2>
                <div >You like it: {data[0]}</div>
                <div >Caffeine level:  {data[1]}</div>
                <div >How Much Sugar: {data[2]}</div>
                <div >Dairy Preference:  {data[3]}</div>
                <Link to='/quiz'><Button className="update-btn">Update Preferences</Button></Link>
            </div>

        </div>


    );


};

export default HomePage;
