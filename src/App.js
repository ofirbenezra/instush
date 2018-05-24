import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './shlomi.css';
import LoginPage from "./LoginPage";
import InstushGallery from "./InstushGallery";
import MyComponent from "./shlomi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent/>
      </div>
    );
  }
}

export default App;
