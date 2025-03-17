import React from 'react';
import Song from './song';

const Library = ({ library }) => {
return (
    <div className="library">
        <h2>Mi Biblioteca</h2>
        {library.map((song, index) => (
        <Song key={index} {...song} />
        ))}
    </div>
    );
};

export default Library;