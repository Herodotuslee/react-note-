import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// component, reuseable
// single responsibility
class App extends Component {

  // constructor-> render->componentDidMount

  // initialize the state
  constructor() {
    super();
    //?
    this.state = {
      name: { firstName: "Albert000", lastName: "Chen" },
      searchField: "",
      monsters: []
      // monsters: [
      //   {
      //     name: 'Aaa',
      //     id: '1234445'
      //   },
      //   {
      //     name: 'BBB',
      //     id: '13dafa'
      //   },
      //   {
      //     name: "CCC",
      //     id: 'fsdfsfs'
      //   }]
    }
    console.log('1111')
  }


  // improve performance
  onSearchChange = (event) => {
    console.log('event', event)
    const searchString = event.target.value.toLowerCase();
    console.log('filterMonster', searchString)
    // const filterMonster = this.state.monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchString);

    // })
    // console.log('filterMonster',filterMonster)
    this.setState(() => {
      // return { monsters: filterMonster }
      return { searchField: searchString }
    })
  }

  componentDidMount() {
    console.log('33333')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log('this.state', this.state)
          }))
  }
  // after componentDidMount->re render()
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this
    // improve performance
    console.log('2222 render from App.js!!!!')
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);

    })
    return (
      <div className="App">
        {/* <input className='search-box' type='search' placeholder='search monster'

          onChange={onSearchChange}></input> */}
        {/* eventhandler */}
        {/* <p>Hi {this.state.name.firstName + "  " + this.state.name.lastName}</p> */}
        {/* <button onClick={
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

          }>Change Name</button> */}


        {/* if I pust className here just a props but not working  */}
        <SearchBox
          className='search-box-monsters'
          onChangeHandler={onSearchChange}
          placeholder='search monster' />
        <CardList monsters={filteredMonsters} />


        {/* {filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}
              ><h1 >{monster.name}</h1>
              </div>
            )
          })} */}
        {/* put call back function in map() */}
        {/* key value optimalize, if we update one of it, react will know it  */}

      </div>);
  }
}


export default App;
