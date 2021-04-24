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
            name: 'Americano',
            desc: 'A strong shot of espresso in hot water',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.starbucks.com%2Fmenu%2Fproduct%2F406%2Fhot%3Fparent%3D%252Fdrinks%252Fhot-coffees%252Famericanos&psig=AOvVaw2xVXTkHLoeU2HlX-EMJmYO&ust=1619294541967000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMC2hdyUlfACFQAAAAAdAAAAABAD',
            strong: true
        },
        {
            name: 'Double shot vanilla latte',
            desc: 'Two shots of espresso with a half serving of steamed milk',
            image: 'https://globalassets.starbucks.com/assets/c8d2c8fa22ee4f4c864dee6dac5a1868.jpg?impolicy=1by1_wide_1242',
            strong: true
        },
        {
            name: 'Black dark roast columbian (pour-over)',
            desc: 'Fine ground imported columbian beans slow dripped to perfection',
            image: 'https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_wide_1242',
            strong: true
        },
        {
            name: 'Turkish cinnamon finisher',
            desc: 'A traditional turkish dessert, made with spice and dark roast coffee',
            image: 'https://www.alshaya.com/campaigns/Starbucks/SBX_CoffeeAuthority/images/winter-campaign/turkish%20coffee.jpg',
            strong: true
        },
        {
            name: 'Nitrogen infused cold brew',
            desc: 'Coffee slow brewed through cold process and nitrogen infused',
            image: 'https://globalassets.starbucks.com/assets/ac2a4461dfe6481a9647ef3544d31c22.jpg',
            strong: true
        },
        {
            name: 'Affogato',
            desc: 'A shot of espresso poured over a scoop of vanilla ice cream',
            image: 'https://data.thefeedfeed.com/recommended/post_1323899.jpg',
            strong: false
        },
        {
            name: 'Salted Caramel latte',
            desc: 'Salted Caramel in espresso with steamed milk',
            image: 'https://globalassets.starbucks.com/assets/1039a0883ad548b69c5f93b9f76dbae2.jpg?impolicy=1by1_wide_1242',
            strong: false
        },
        {
            name: 'Flat white',
            desc: 'Steamed milk with your choice of flavor',
            image: 'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_1242',
            strong: false
        }, {
            name: 'Mocha Latte',
            desc: 'Latte rich with chocolate goodness',
            image: 'https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242',
            strong: false
        }, {
            name: 'Cappuccino',
            desc: 'Shot of espresso with 50% steamed milk',
            image: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242',
            strong: false
        },
    ];

    const timer = () => {
        setTimeout(() => {
            setDisplay(true);
        }, 3000);
    }

    timer();

    const randomNumber = Math.floor(Math.random() * 10);
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
