import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Store from './Store';
import { Provider } from 'react-redux'
import './App.css'
import RoutesComponent from './Routes';

function App() {

  return (
    <Provider store={Store}>
      <RoutesComponent/>
    </Provider>
  );
}

export default App;
