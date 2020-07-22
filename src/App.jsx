import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    height: "",
    mass: "",
    hairColor: "",
    skinColor: "",
    eyeColor: "",
    birthYear: "",
    gender: "",
    inputValue: "",
  };

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          hairColor: data.hair_color,
          skinColor: data.skin_color,
          eyeColor: data.eye_color,
          birthYear: data.birth_year,
          gender: data.gender,
        })
      );
  }

  onClickHandler = (e) => {
    e.preventDefault();
    fetch(`https://swapi.dev/api/people/${this.state.inputValue}/`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          hairColor: data.hair_color,
          skinColor: data.skin_color,
          eyeColor: data.eye_color,
          birthYear: data.birth_year,
          gender: data.gender,
          inputValue: "",
        })
      );
  };

  render() {
    return (
      <div className="Char">
        <span>Name: {this.state.name}</span>
        <span>Height: {this.state.height} </span>
        <span>Mass: {this.state.mass} </span>
        <span>Hair Color: {this.state.hairColor} </span>
        <span>Skin Color: {this.state.skinColor} </span>
        <span>Eye Color: {this.state.eyeColor} </span>
        <span>Birth Year: {this.state.birthYear} </span>
        <span>Gender: {this.state.gender} </span>

        <form className="charInput" onSubmit={(e) => this.onClickHandler(e)}>
          <input
            value={this.state.inputValue}
            placeholder="Enter Number"
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button>Force Browse</button>
        </form>
      </div>
    );
  }
}

export default App;
