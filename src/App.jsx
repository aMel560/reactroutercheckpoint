// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who enters the dreams of others to steal their secrets from their subconscious.",
      posterURL: "inception-poster.jpg",
      note: 4.5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    // Add more movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const handleFilterChange = (name, value) => {
    if (name === "title") {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else if (name === "rate") {
      const filtered = movies.filter(
        (movie) => movie.note >= parseFloat(value)
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {" "}
                <Filter onFilterChange={handleFilterChange} />
                <MovieList movies={filteredMovies} />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
