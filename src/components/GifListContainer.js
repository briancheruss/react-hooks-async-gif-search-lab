import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  fetchGifs = (query) => {
    const apiKey = "Ta07Le5QoAJ7IoV7rzjQWdMJUJDHC6Ft"; 
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const first3Gifs = data.data.slice(0, 3);
        this.setState({ gifs: first3Gifs });
      });
  };

  componentDidMount() {
    this.fetchGifs("initial query"); 
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
