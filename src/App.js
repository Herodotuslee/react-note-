import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    //?
    this.state = {
      name: { firstName: "Albert000", lastName: "Chen" },
      monsters: [{ name: 'Aaa' }, { name: 'BBB' }, { name: "CCC" }]
    }


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName + "  " + this.state.name.lastName}</p>
          <button onClick={
            () => {
              this.setState(
                // async
                () => {
                  return {
                    name: { firstName: 'Albert111', lastName: 'LEE' }
                  };
                },
                () => {
                  console.log('this.state', this.state)
                }
                //call back
              )
            }

          }>Change Name</button>
          {this.state.monsters.map((monster)=>{return <h1>{monster.name}</h1>})}
          {/* put call back function in map() */}
        </header>

      </div>);
  }
}


export default App;
