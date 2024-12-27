import React from "react";
import MoviesGrid from "./MoviesGrid";
import MoviesList from "./MoviesList";


const App =()=> {
    const [mode, setMode] = React.useState('list');
  
    const modeChangeHandler = (event) => {
      setMode(event.target.value);
    };
  
    return (
      <main>
        <select onChange={modeChangeHandler}>
          <option value="list">List Mode</option>
          <option value="grid">Grid Mode</option>
        </select>
  
        {mode === 'list' ? <MoviesList /> : <MoviesGrid />}
      </main>
    );
  }

  export default App;