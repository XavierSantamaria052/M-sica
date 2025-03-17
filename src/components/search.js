import React from 'react';
import Song from './song';

const SearchResults = ({ songs, onAddToLibrary }) => {
return (
    <div className="song-list">
        <h2>Resultados de Búsqueda</h2>
        {songs.map((song, index) => (
        <div key={index} className="song-container">
            <Song {...song} />
            <button onClick={() => onAddToLibrary(song)}>Agregar a mi biblioteca</button>
        </div>
        ))}
    </div>
    
    );
};

export default SearchResults;