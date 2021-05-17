import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', getGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('FETCH_MOVIE_GENRE', getMovieGenre);

}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchDetails(action) {
    //fetch movie detail for specific movie id
    try {
        const details = yield axios.get(`/api/movie/${action.payload}`);
        console.log('get details:', details.data);
        yield put({ type: 'SET_DETAILS', payload: details.data });

    } catch (error) {
        alert('Unable to get details from server');
        console.log('ERROR in getting details', error);

    }
}



function* getGenres() {
    // get all genres from the DB
    try {
        const response = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        alert('Unable to get genres from server');
        console.log('ERROR in getting genres', error);
    }

}

function* getMovieGenre() {
    // get all movie_genre combos from the DB
    try {
        const response = yield axios.get('/api/genre/moviegenre');
        yield put({ type: 'SET_MOVIE_GENRE', payload: response.data });
    } catch (error) {
        alert('Unable to get movie-genre from server');
        console.log('ERROR in getting movie-genre', error);
    }

}

function* addMovie(action) {
    //add new movie to database
    try {
        yield axios.post('/api/movie', action.payload);
    } catch (error) {
        console.log(error);
        alert('Unable to save movie');
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store details returned from the server
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movie_genre combos from the server
const movieGenre = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        movieGenre,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
