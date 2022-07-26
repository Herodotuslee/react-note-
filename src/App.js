import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
       //?
    this.state ={
      name:{firstName:"Albert000",lastName:"Chen"}
    }

 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <p>Hi {this.state.name.firstName+"  "+this.state.name.lastName}</p>
         <butto onClick={
          ()=>{
            this.setState(
              ()=>{
                return  {name:{firstName:'Albert111',lastName:'LEE'}
              };
            },
            ()=>{
              console.log('this.state',this.state)
            }
            //call back
            )
          }
        
         }>Change Name</butto>
        </header>
      </div>);
  }
}


export default App;
