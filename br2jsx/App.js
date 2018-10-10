"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';

let textStr = "This <br> funny tag syntax <br/> is neither a string <br /> nor HTML. It is called JSX, and <br> it is a syntax extension <br/> to JavaScript. We recommend <br /> using it with React to describe what the UI should look like. JSX may remind you of a template language, <br /> but it comes with the full power of <br> JavaScript. JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.";

ReactDOM.render(
  <BR2JSX text = {textStr} />
  , document.getElementById('container') 
);

