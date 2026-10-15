import React, { Component } from "react";
import "./App.css";
import image from "./Hosea Suter.jpeg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Hosea Kiptanui Suter",
        bio: "A passionate software developer and AI enthusiast building innovative digital solutions.",
        imgSrc: image,
        profession: "Software Engineer & AI Developer",
      },
      shows: false,
      elapsedTime: 0,
    };

    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    return (
      <div className="App">
        <h1>Developer Profile Tracker</h1>

        <button className="toggle-btn" onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="profile-card">
            <img className="profile-img" src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <h3>{profession}</h3>
            <p>{bio}</p>
          </div>
        )}

        <div className="timer-container">
          <p>
            Component active for: <strong>{this.state.elapsedTime}</strong>{" "}
            seconds
          </p>
        </div>
      </div>
    );
  }
}

export default App;
