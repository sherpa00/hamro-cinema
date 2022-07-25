import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider} from 'react-redux';
import currentMovieReducer from './slices/currentMovie';
import tokenReducer from "./slices/token";
import upcomingReducer from './slices/upcoming';
import nowshowingReducer from './slices/nowshowing';

const movieStore = configureStore({
  reducer: {
    currentMovie: currentMovieReducer,
    token: tokenReducer,
    nowshowing: nowshowingReducer,
    upcoming: upcomingReducer
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={movieStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
