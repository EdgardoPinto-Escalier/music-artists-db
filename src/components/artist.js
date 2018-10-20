import React, { Component } from 'react';
import Header from './header';
import AlbumList from './albumList';

const requestUrl = `http://localhost:3004/artists`;

class Artist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
  }

  componentDidMount() {
    fetch(`${requestUrl}/${this.props.match.params.artistid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        artist:json
      })
    })
  }

  render() {
    return(
      <div className="container mt-4">
        <Header/>
        <div className="artistBio">
          <div className="avatar mt-4">
            <span style={{background:`url('/img/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
          </div>
          <div className="artistBio">
            <div className="ml-1 mt-3">
              <h3>{this.state.artist.name}</h3>
            </div>
            <div class="row">
              <div className="bioText ml-3 mr-3">
                {this.state.artist.bio}
              </div>
            </div>
          </div>

          <AlbumList albumList={this.state.artist.albums}/>
        </div>
      </div>
    )
  }
}

export default Artist;