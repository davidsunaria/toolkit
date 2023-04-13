import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Shipment } from './pages/shipment';
import { StoreProvider} from "easy-peasy";
import store from '../src/store';

function App() {
  return (
    <div className="App">
       <StoreProvider store={store}>
     <Shipment/>
     </StoreProvider>
    </div>
  );
}

export default App;
