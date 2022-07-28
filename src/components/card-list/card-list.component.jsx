import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

// component will rerender when props change
class CardList extends Component {

    render() {
        const { monsters } = this.props
        console.log('this.props', this.props)
        console.log('render from card-list')
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    // const { name, email, id } = monster;
                    return (
                      <Card monster={monster}/>
                    )
                }
                )}
            </div>
        )
    }
}

export default CardList 