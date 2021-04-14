import React from 'react';
import './homePage.css';
import { Form, ButtonGroup, Button } from 'react-bootstrap';



export default function Quiz() {
  //insert api content
  return (
    <div>
      <h3 id="darkness">How strong do you like your coffee?</h3>
      <Form>
        <Form.Group id="rangeDark" controlId="formBasicRange">
          <Form.Label>Strong-Flat</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
      </Form><br/>
      <h3>How much caffeine do you like?</h3>
      <Form>
       <label for='checkEsp'>Espresso</label>
       <input id='checkCaff' type="checkbox"/>
       
       <label for='checkDecaf'>Decaf</label>
       <input id='checkDecaf' type="checkbox"/>

       <label for='checkSurprise'>Surpise Me</label>
       <input id='checkSurprise' type="checkbox"/>
      </Form><br/>
      <h3>How much sugar can you handle?</h3>
      <Form>
        <label for='sugNon'>None</label>
        <input id='sugNon' type="checkbox"/>

        <label for='sugNorm'>Standard</label>
        <input id='checkCaff' type="checkbox"/>

        <label for='sugMuch'>As much as I can legally have</label>
        <input id='sugMuch' type="checkbox"/>

        <label for='sugPref'>No preference</label>
        <input id='sugPref' type="checkbox"/>
      </Form>
      <h3>Do you have a dairy preference?</h3>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">None</Button>
        <Button variant="secondary">Normal</Button>
        <Button variant="secondary">NonFat</Button>
        <Button variant="secondary">Almond</Button>
        <Button variant="secondary">Soy</Button>
      </ButtonGroup>

      <Button variant="primary" size="lg" block>
        Find me a drink
      </Button>

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