import React, { useState, useEffect } from 'react';
import React, { Component } from "react";
import './homePage.css';


export default function Quiz() {
  //insert api content
    fetch("")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);    
    });
  }

/* retrun to default App. js container withtin Homepage
*/
