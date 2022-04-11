import React, { Component} from 'react';
import './App.css';
import { Class } from './Componenet/Class';
import Funct from './Componenet/Funct';

class App extends Component {

  constructor() {
    super();

    this.state = {
      box1:false,
      box2:false,
  }
  }
  

  render() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <button onClick={()=>this.setState({box1: !this.state.box1})} style={{margin:"5px"}}>Function Component</button>
        <button onClick={()=>this.setState({box2: !this.state.box2})} style={{margin:"5px"}}>Class Component</button>
      </div>
      <div>
        {this.state.box1 ?  <Funct /> : null}
        {this.state.box2 ? <Class /> : null}
      </div>
    </div>
  );
  }
}

export default App;
