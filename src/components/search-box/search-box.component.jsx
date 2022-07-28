import { Component } from 'react';
import './search-box.styles.css'
// import CSS everywhere
class SearchBox extends Component {
    render() {
        return (
            <input
                className={`search-box ${this.props.className}`}
                //    because you might have many search-box 
                //    claaName='search-box'
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox