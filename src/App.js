import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Title from './Components/Titile'
import Tool from './Components/Tool'
import Pdf from './Components/Pdf'
import Ann from './Components/Annotation'

export default class App extends Component{
  render(){
    return (
      <div className="Out">
        <Title></Title>
        <Tool></Tool>
        <Pdf></Pdf>
        <Ann></Ann>
      </div>
    );
  }
}
