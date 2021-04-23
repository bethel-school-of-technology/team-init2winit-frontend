import React, { useState } from 'react';
import './generator.css';
import { Jumbotron, Spinner, Button } from 'react-bootstrap';
import NavComponent from '../nav/NavComponent';

function Generator() {
    const [display, setDisplay] = useState(false);

    const generateAgain = () => {
        window.location = "/generator";
    }

    // this is mock data that will soon move to back end
    const data = [
        {
            name: 'coffee 1',
            desc: 'a cool description',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
        },
        {
            name: 'coffee 2',
            desc: 'a cool description',
            image: 'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg'
        },
        {
            name: 'coffee 3',
            desc: 'a cool description',
            image: 'http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg'
        },
        {
            name: 'coffee 4',
            desc: 'a cool description',
            image: 'https://img1.mashed.com/img/gallery/coffee-mistakes-youre-probably-making-at-home/intro-1594766282.jpg'
        },
        {
            name: 'coffee 5',
            desc: 'a cool description',
            image: 'https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/01-january/01-blog-coffee-l.jpg'
        },
    ];

    const timer = () => {
        setTimeout(() => {
            setDisplay(true);
        }, 3000);
    }

    timer();

    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber)
    const coffee = data[randomNumber]


    return (

        <div>
            <NavComponent />

            <Jumbotron id="drinkJumbo">
                {display === false ? (<Spinner className="spinner" animation="border" role="status" >
                    <span className="sr-only">Loading...</span>
                </Spinner>) :
                    (
                        <div><h1>{coffee.name}</h1>
                            <img className="coffeeImg" src={coffee.image} />
                            <p>  {coffee.desc}</p>
                            <Button onClick={() => generateAgain()} variant="primary">Again!</Button></div>
                    )}


            </Jumbotron>
        </div>
    )
}

export default Generator
