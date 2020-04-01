import React from 'react'
import api_key from '../apikey'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'https://api.giphy.com/v1/gifs/search?q='

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: [],
        }
    }

    handleFormSubmit = (keyword) => {
        fetch(URL + keyword + '&api_key=' + api_key + '&rating=g&limit=3')
        .then(resp => resp.json())
        .then(json => {
            this.setState({gifs: json.data})
        })
    }

    render() {
        return (
            <div>
                <GifSearch onFormSubmit={this.handleFormSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}