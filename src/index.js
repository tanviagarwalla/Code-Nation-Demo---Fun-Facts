import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase} from './clients/firebase.js';

let facts = {}
var db = buildFirebase();
var dbRef = db.ref("/funFacts");
dbRef.once("value").then(function(data) {
 facts = data.val();
 ReactDOM.render(<App />, document.getElementById('root'));
});



