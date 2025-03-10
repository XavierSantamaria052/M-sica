import React, { Component } from "react";

class Song extends Component {
render() {
    const { title, artist, duration, image } = this.props;
    return (
    <div className="song-card">
        <div className="img-container">
            <img src={image} alt={title} className="song-img" />
        </div>
        <div className="song-info">
            <h2 className="song-title">{title}</h2>
            <p className="song-artist">Artista: {artist}</p>
            <p className="song-duration">Duración: {duration}</p>
        </div>
    </div>
    );
    }
}

export default Song;