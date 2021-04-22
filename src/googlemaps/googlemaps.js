import React from 'react';
import NavComponent from '../nav/NavComponent';

function Googlemaps() {
    return (

        <div>
            <NavComponent />
            <iframe src="https://www.google.com/maps/d/embed?mid=1TWjK-qadigTRp5rr6LB1l4e-JoE&hl=en" width="640" height="480"></iframe>
        </div>
    )
}

export default Googlemaps



