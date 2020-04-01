import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            search: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(event.target.search.value);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label name='search'>Enter a Search Term:</label><br></br>
                <input type='text' name='search' onChange={this.handleChange} value={this.state.search} ></input><br></br>
                <input type='submit' value='Find Gifs' />
            </form>
        )
    }
}