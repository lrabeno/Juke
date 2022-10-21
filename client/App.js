import React, { useEffect, useState } from "react";
import axios from "axios";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

// const albums = [
//   {
//     id: 1,
//     name: "No Dummy",
//     artworkUrl: "default-album.jpg",
//     artistId: 1,
//     artist: {
//       id: 1,
//       name: "The Crash Test Dummies",
//     },
//   },
//   {
//     id: 2,
//     name: "I React to State",
//     artworkUrl: "default-album.jpg",
//     artistId: 1,
//     artist: {
//       id: 1,
//       name: "The Crash Test Dummies",
//     },
//   },
// ];

const App = () => {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    const response = await axios.get("http://localhost:8080/api/albums");
    setAlbums(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <AllAlbums albums={albums} />
      <Player />
      {/* The music starts here! */}
    </div>
  );
};

export default App;
