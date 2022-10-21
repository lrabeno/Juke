import React from "react";

const AllAlbums = ({ albums }) => {
  console.log("here the albums", albums);
  return (
    <div className="container">
      {albums.map((album) => {
        return (
          <div id="albums" className="row wrap" key={album.id}>
            <div className="album">
              <a>
                <img src={album.artworkUrl} />
                <p>{album.name}</p>
                <small>{album.artist.name}</small>
              </a>
            </div>
            {/* <div className="album">
              <a>
                <img src="default-album.jpg" />
                <p>ALBUM 2</p>
                <small>Artist Name</small>
              </a>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default AllAlbums;
