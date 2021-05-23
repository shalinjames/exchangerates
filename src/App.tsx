import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage/LandingPage"
import { RootStoreContextProvider } from "./models/RootStoreContext";

function App() {
  return (
    <div className="App">
      <RootStoreContextProvider>
        <LandingPage />
      </RootStoreContextProvider>
    </div>
  );
}

export default App;
