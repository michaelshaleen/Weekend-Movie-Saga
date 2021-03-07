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

//Generator funtion that listens for dispatch type
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('SET_MOVIES', setMovies);
}


function* setMovies(action) {
  try {
      yield axios.post('/api/movie/:id', action.payload);
      yield put({
        type: 'FETCH_MOVIES'
            })
  } 
  catch {
      console.log('ERROR SINGLE MOVIE');
  }    
}



//reducer called when 'THIS_MOVIE' is dispatched
//returns a state, can be accessed with .newMovie
const newMovie = (state = {}, action) => {
  console.log("MOVIES REDUCER", action.payload)
    switch (action.type) {
        case 'THIS_MOVIE':
            return action.payload;
        default:
            return state;
    }
}
//generator function that grabs all movies from DB
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie/');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }      
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  console.log("MOVIES REDUCER", action.payload)
    switch (action.type) {
        case 'SET_MOVIES':
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

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        newMovie
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
