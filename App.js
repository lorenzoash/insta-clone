import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Post from "./Components/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
        <Post nickname="Zo" avatar="https://i.imgur.com/r1itaw6.png" caption="Im in Japan" image="https://i.imgur.com/gZv7a8P.jpg" />
          <Post nickname="TenderLovin" avatar="https://i.imgur.com/gvrjlV8.png" caption="My Tender-tracker site is LIVE" image="https://i.imgur.com/WXCR8Ui.png" />
        </section>
      </div>
    )
  }
}

export default App;
