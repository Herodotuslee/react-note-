import { Component } from 'react';


class SearchBox extends Component {
    render() {
        return (
            <input
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