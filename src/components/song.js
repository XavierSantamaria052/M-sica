import React from 'react';

const Song = ({ title, artist, duration, image, onAdd }) => {
return (
    <div className="song">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h4>{artist}</h4>
        <h4>{duration}</h4>
        {onAdd && (
            <button onClick={onAdd} className="add-button">
            Agregar a mi biblioteca
            </button>
        )}
    </div>
    );

};

export default Song;