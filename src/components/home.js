import React, { Component } from 'react';

import Banner from '../components/banner'; 
import ArtistList from './artistList';

const artistUrl = 'http://localhost:3004/artists'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ''
    }
  }

  componentDidMount() {
    fetch(artistUrl, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        artists:json
      })
    })
  }

  render() {
    return(
      <div className="container">
        <Banner/>
        <ArtistList allArtists={this.state.artists}/>
      </div>
    )
  }
}

export default Home;