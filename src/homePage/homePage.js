import React, { useState, useEffect } from 'react';
import './homePage.css';
import NavComponent from '../nav/NavComponent';
import axios from '../axios';


function HomePage({ history }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        /*
                if (!localStorage.getItem('authToken')) {
                    history.push('/login')
                } */
        const username = localStorage.getItem('username');

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


    const logoutHandler = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        history.push('/login')
    }

    return (
        <div>
            <NavComponent />
            <div className="container">
                <h1>Your Preferences</h1>
                <div className="box">How Strong: {data[0]}</div>
                <div className="box">How Much Caffeine:  {data[1]}</div>
                <div className="box">How Much Sugar: {data[2]}</div>
                <div className="box">Dairy Preference:  {data[3]}</div>



            </div>
            <button onClick={logoutHandler}>Logout</button></div>


    );

};

export default HomePage;
