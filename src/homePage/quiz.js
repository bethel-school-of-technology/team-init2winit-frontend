import React, {useState} from 'react';
import './homePage.css';
import { Form, ButtonGroup, Button } from 'react-bootstrap';



export default function Quiz() {

const [strongFlat, setStrongFlat] = useState('');
const [caffeine, setCaffeine] = useState('');
const [sugar, setSugar] = useState('');
const [dairy, setDairy] = useState(''); 

  return (
    <div>
      <h3 id="darkness">How strong do you like your coffee?</h3>
      <Form>
           <input id='strong' name="strongFlat" type="radio"/>
       <label for='strong'>Strong</label>
       <br></br>
           <input id='flat' name="strongFlat" type="radio"/>
       <label for='flat'>Flat</label>
       <br></br>
      </Form><br/>
      <h3>How much caffeine do you like?</h3>
      <Form>
      
       <input id='checkCaff' name="expresso" type="radio"/>
       <label for='checkEsp'>Espresso</label>
       <br></br>
       
       <input id='checkDecaf' name="expresso" type="radio"/>
       <label for='checkDecaf'>Decaf</label>
       <br></br>

       <input id='checkSurprise' name="expresso" type="radio"/>
       <label for='checkSurprise'>Surpise Me</label>
       <br></br>
      </Form><br/>
      <h3>How much sugar can you handle?</h3>
      <Form>

        <input id='sugNon' name="sugar" type="radio"/>
        <label for='sugNon'>None</label>
        <br></br>

        
        <input id='checkCaff' name="sugar" type="radio"/>
        <label for='sugNorm'>Standard</label>
        <br></br>

        <input id='sugMuch' name="sugar" type="radio"/>
          <label for='sugMuch'>As much as I can legally have</label>
        <br></br>

    
        <input id='sugPref' name="sugar" type="radio"/>
           <label for='sugPref'>No preferences</label>
        <br></br>
      </Form>
      <h3>Do you have a dairy preference?</h3>
      <Form>
        <input id='none' name="dairy" type="radio"/>
        <label for='none'>None</label><br></br>


          <input id='normal' name="dairy" type="radio"/>
          <label for='normal'>Normal</label><br></br>

          <input id='nonfat' name="dairy" type="radio"/>
            <label for='none'>Non Fat</label><br></br>

          <input id='almond' name="dairy" type="radio"/>
            <label for='almond'>Almond</label><br></br>

          <input id='soy' name="dairy" type="radio"/>
            <label for='soy'>Soy</label>
  </Form>

    

    </div>
  )
  /*
    fetch("")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);    
    });
  */
}