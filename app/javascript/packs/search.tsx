import React from 'react';
import ReactDOM from 'react-dom';
import { LocationList } from '../src/components/LocationList/LocationList';

const elements = document.getElementsByClassName('search');

// TODO do we need an event listiner? DOMCOntentLoaded or Turbolinks related?
Array.from(elements).forEach((element) => {
  ReactDOM.render(<LocationList />, element);
});
