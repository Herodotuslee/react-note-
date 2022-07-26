import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    //?
    this.state = {
      name: { firstName: "Albert000", lastName: "Chen" },
      monsters: [
        {
          name: 'Aaa',
          id: '1234445'
        },
        {
          name: 'BBB',
          id: '13dafa'
        },
        {
          name: "CCC",
          id: 'fsdfsfs'
        }]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>
    this.setState(
      ()=>{
        return {monsters:users}
      },
      ()=>{
        console.log('this.state',this.state)
      }))
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
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}
              ><h1 >{monster.name}</h1>
              </div>
            )
          })}
          {/* put call back function in map() */}
          {/* key value optimalize, if we update one of it, react will know it  */}
        </header>

      </div>);
  }
}


export default App;
