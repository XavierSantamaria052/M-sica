import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Song from "./components/song";
import OtonokeImage from './img/otonoke.jpg';
import BlingBangBangBornImage from './img/bling bang.jpg';
import 堕天Image from './img/2way nice guy.jpg';
import のびしろImage from './img/case.jpg';

class App extends Component {
  componentDidMount() {
    console.log("La app se ha cargado correctamente.");
  }

  goToExternalPage = () => {
    window.location.href = "index.html";
  };

  render() {
    const songs = [
      {
        title: "Otonoke",
        artist: "Creppy Nuts",
        duration: "3:05",
        image: OtonokeImage
      },
      {
        title: "Bling-Bang-Bang-Born",
        artist: "Creppy Nuts",
        duration: "2:48",
        image: BlingBangBangBornImage
      },
      {
        title: "堕天",
        artist: "Creppy Nuts",
        duration: "2:52",
        image: 堕天Image
      },
      {
        title: "のびしろ",
        artist: "Creppy Nuts",
        duration: "3:56",
        image: のびしろImage
      },
    ];

    return (
      <div className="App">
        <Header />
        <button onClick={this.goToExternalPage} className="back-button">
          Volver
        </button>
        <div className="song-list">
          {songs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              image={song.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;



