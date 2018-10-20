import React from 'react';
import { Link } from 'react-router-dom';


const ArtistList = (props) => {

  const list = ({allArtists}) => {
    if(allArtists) {
      return allArtists.map((item)=>{
        const itemStyle = {
          background: `url('/img/covers/${item.cover}.jpg') no-repeat` 
        }

        return(
          <Link key={item.id} to={`/artist/${item.id}`} className="artistItem" style={itemStyle}>
            <div><i class="fas fa-microphone-alt"></i> {item.name}</div> 
          </Link>
        )
      })
    } 
  }
  
  return(
    
      <div className="artistsList">
        <h4 className="mt-4 mb-4"><i class="fas fa-search"></i> Artists List</h4>
        {list(props)}
      </div>
    
  )
}

export default ArtistList;