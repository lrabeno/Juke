import React from "react";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <AllAlbums />
      <Player />
      {/* The music starts here! */}
    </div>
  );
};

export default App;
