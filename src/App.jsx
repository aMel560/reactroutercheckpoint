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
      posterURL:
        "https://th.bing.com/th/id/OIP.Vg7gE_hwMujcoiqNbwekmAHaF7?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      note: 4.5,
      trailerURL: "https://youtu.be/HcoZbHBDHQA?si=elrnKAumjiPt_9-4",
    },
    // Add more movies here
  ]); //iuhnj

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
