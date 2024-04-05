// MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, Type } = movie;

  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3> {/* Display the movie title here */}
      </div>
    </div>
  );
}

export default MovieCard;
