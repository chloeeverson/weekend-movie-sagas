import {HashRouter as Router, Route} from 'react-router-dom';
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
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        <Route path="/api/movie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
