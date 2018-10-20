import React from 'react';

const AlbumList = (props) => {

  const showList = ({albumList}) => {
    if(albumList) {
      return albumList.map((item, index) => {
        return(
          <img key={index} src={`/img/albums/${item.cover}.jpg`}/>
        )
      })
    }
  }

  return(
    <div className="albumsList mt-4 mb-4">
      {showList(props)}
    </div>
  )
}

export default AlbumList;