import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Route path="/" exact>
        <nav>
            <Link to="/addmovie">Add Movie</Link>
        </nav>
          <MovieList />
        </Route>

        {/* Details page */}

        {/* Add Movie page */}
        <Route path="/addmovie" exact>
        <nav>
            <Link to="/">Cancel</Link>
        </nav>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
