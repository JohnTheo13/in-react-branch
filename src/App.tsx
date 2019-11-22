import React from "react";

import StoreProvider from "./context/ StoreProvider";
import Header from "./components/Header";
import HeaderChange from "./components/HeaderChange";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => (
  <StoreProvider>
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HeaderChange />
      </header>
    </div>
  </StoreProvider>
);

export default App;
