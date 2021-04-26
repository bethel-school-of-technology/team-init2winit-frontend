import React, { useState } from 'react';
import './Quiz.css';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import axios from '../axios';



export default function Quiz() {

  const [strongFlat, setStrongFlat] = useState('');
  const [caffeine, setCaffeine] = useState('');
  const [sugar, setSugar] = useState('');
  const [dairy, setDairy] = useState('');

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

    const username = localStorage.getItem('username');

    try {
      const { data } = await axios.post('/quiz', { username, coffee }, config);
      console.log(data);
      window.location = "/"
    } catch (error) {
      console.log(error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      window.location = "/quiz"
    }

  }

  return (
    <div>
        <Jumbotron id="jumboQuiz">
          <Form>
          <h3 id="darkness">How strong do you like your coffee?</h3>

          <input id='Strong' name="strongFlat" type="radio" onClick={(e) => setStrongFlat(e.target.id)} />
          <label htmlFor='Strong'>Strong</label>
          <br></br>
          <input id='Flat' name="strongFlat" type="radio" onClick={(e) => setStrongFlat(e.target.id)} />
          <label htmlFor='Flat'>Flat</label>
          <br></br>

          <h3>How much caffeine do you like?</h3>


          <input id='Expresso' name="expresso" type="radio" onClick={(e) => setCaffeine(e.target.id)} />
          <label htmlFor='Expresso'>Espresso</label>
          <br></br>

          <input id='Decaf' name="decaf" type="radio" onClick={(e) => setCaffeine(e.target.id)} />
          <label htmlFor='Decaf'>Decaf</label>
          <br></br>

          <h3>How much sugar can you handle?</h3>


          <input id='None' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
          <label htmlFor='None'>None</label>
          <br></br>


          <input id='Normal' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
          <label htmlFor='Normal'>Standard</label>
          <br></br>

          <input id='A lot' name="sugar" type="radio" onClick={(e) => setSugar(e.target.id)} />
          <label htmlFor='A lot'>As much as I can legally have</label>
          <br></br>

          <h3>Do you have a dairy preference?</h3>

          <input id='NoDairy' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
          <label htmlFor='NoDairy'>None</label><br></br>


          <input id='Standard' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
          <label htmlFor='Standard'>Standard</label><br></br>

          <input id='Nonfat' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
          <label htmlFor='Nonfat'>Non Fat</label><br></br>

          <input id='Almond' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
          <label htmlFor='Almond'>Almond</label><br></br>

          <input id='Soy' name="dairy" type="radio" onClick={(e) => setDairy(e.target.id)} />
          <label htmlFor='Soy'>Soy</label><br></br>

          <Button id="subButton" variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
            Submit
          </Button>
        </Form>
      </Jumbotron>


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

