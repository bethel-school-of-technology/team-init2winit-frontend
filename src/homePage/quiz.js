import React, { useState } from 'react';
import './homePage.css';
import { Form, Button } from 'react-bootstrap';
import axios from '../axios';



export default function Quiz() {

  const [strongFlat, setStrongFlat] = useState('');
  const [caffeine, setCaffeine] = useState('');
  const [sugar, setSugar] = useState('');
  const [dairy, setDairy] = useState('');
  const [data, setData] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    };

    const coffee = [strongFlat, caffeine, sugar, dairy];
    console.log(coffee)

    try {
      const { data } = await axios.post('/quiz', { coffee }, config);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <Form>
        <h3 id="darkness">How strong do you like your coffee?</h3>

        <input id='strong' name="strongFlat" type="radio" onClick={(e) => setStrongFlat(e.target.id)} />
        <label for='strong'>Strong</label>
        <br></br>
        <input id='flat' name="strongFlat" type="radio" onClick={(e) => setStrongFlat(e.target.id)} />
        <label for='flat'>Flat</label>
        <br></br>

        <h3>How much caffeine do you like?</h3>


        <input id='expresso' name="expresso" type="radio" onClick={(e) => setCaffeine(e.target.id)} />
        <label for='expresso'>Espresso</label>
        <br></br>

        <input id='decaf' name="expresso" type="radio" onClick={(e) => setCaffeine(e.target.id)} />
        <label for='decaf'>Decaf</label>
        <br></br>

        <h3>How much sugar can you handle?</h3>


        <input id='sugNon' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
        <label for='sugNon'>None</label>
        <br></br>


        <input id='sugNorm' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
        <label for='sugNorm'>Standard</label>
        <br></br>

        <input id='sugMuch' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
        <label for='sugMuch'>As much as I can legally have</label>
        <br></br>

        <h3>Do you have a dairy preference?</h3>

        <input id='dairyNone' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
        <label for='dairyNone'>None</label><br></br>


        <input id='dairyNormal' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
        <label for='dairyNormal'>Normal</label><br></br>

        <input id='dairyNonfat' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
        <label for='dairyNonfat'>Non Fat</label><br></br>

        <input id='dairyAlmond' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
        <label for='dairyAlmond'>Almond</label><br></br>

        <input id='dairySoy' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
        <label for='dairySoy'>Soy</label><br></br>

        <Button id="subButton" variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
          Submit
                </Button>
      </Form>



    </div>
  )
  /*
    fetch("")
    .then(function(response) {
      return response.json();
    })
    .then(function({Quiz}) {
      console.log({Cofee: "Connected to javaShare Coffee Model"});    
    });
  */
}
//insert api content

  /*
    fetch("http://localhost:5000/JavaShare/Coffee") 
    .then(function(HomePage) {
      return response.json();
    })
    .then(function(Homepage) {
    App.HomePage.function(Quiz);    
    });
    fetch.Coffee()
    .then(function(response) {
      return response.json();
    })
    .then(function({Quiz}) {
      console.log({Cofee: "Connected to javaShare Coffee Model"});    
    });
    const Quiz = {
      Coffee: {
        Roast: "Coffee.Roast",
        Flavor: "Coffee.Flavor",
        Sugar: "Coffee.Sugar"
      },
      Dark: "Dark",
      Robusto: "Robusto",
      Light: "Light",
      Medium: "Medium",
      Caffeine: "Caffeine"
    };
    
    let Quiz = quiz_data.Roast.Component;
    
    if (!Quiz) {
      throw new Error("Quiz is not defined");
    }
    
    switch (Quiz) {
      case quiz_data.Coffee.Dark:
      // Do something for Quiz coffee is Dark
      case quiz_data.Coffee.Robusto:
      // Do something 
      case quiz_data.Light:
      // This will work if Light generic
      // Do something for Light (generic)
      case quiz_data.Coffee.Medium:
      //Do something for Sugar
      case quiz_data.Coffee.Caffeine:
    }
    
  
  // Quiz coffee is Dark should display by default
*/

