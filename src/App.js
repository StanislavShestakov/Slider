import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div>
    <SayFullName name="Stas" surname="Shestakov"/>
    <SayFullName name="Dmitriy" surname="Gjrohovcev"/>
    </div>
    );
  }
}
function Hello(){
  let phrase = "Worlad"
  return (
    <h1>Hello  World! {4+5}</h1>
    )
}
function SayFullName(props){
  return (
  <div>
  <h1> My name {props.name}, surname - {props.surname}</h1>
  <a href={props.link}> linck my profile</a>
  </div>
  )
}


export default App;
