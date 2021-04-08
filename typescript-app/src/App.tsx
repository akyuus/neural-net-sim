
import './App.css';
import "./styles.css";
import SubflowUI from './components/SubflowUI';
import {Component} from "react";
import {TFComponent} from './components/TFComponent'


export class App extends Component{

  render () {

    
    return   <div>
              <TFComponent></TFComponent>
              <SubflowUI></SubflowUI>
              </div>
  }
  
  
}
