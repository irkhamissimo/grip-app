import './App.css';
import store from './app/store';
import React from 'react';
import { Provider } from 'react-redux';
import Grid from './components/Grid';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
