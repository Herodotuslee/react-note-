import { Component } from 'react';

// component will rerender when props change
class CardList extends Component {

    render() {
        const { monsters } = this.props
        console.log('this.props', this.props)
        console.log('render from card-list')
        return (
            <div>
                <h1>  Hello I'm the Card CardList Component</h1>
                <div>
                    <p>Test</p>
                </div>
                <div>
                    {monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
                </div>
            </div>
        )
    }
}

export default CardList 