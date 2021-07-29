import React from "react";
import "normalize.css";
import "./App.css";

const alpha = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open HH",
  "Kick n' Hat",
  "Kick",
  "Closed HH",
];
// eslint-disable-next-line
const beta = [
  "Chord 1",
  "Chord 2",
  "Chord 3",
  "Shaker",
  "Open HH",
  "Closed HH",
  "Punchy Kick",
  "Side Stick",
  "Snare",
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Drum Machine",
      powerAlphaClassName: "power-toggle-off",
      powerBetaClassName: "power-toggle-on",
      bankAlphaClassName: "bank-toggle-off",
      bankBetaClassName: "bank-toggle-on",
      disabled: false,
      volume: 25,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleRangeDrag = this.handleRangeDrag.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 81:
        document.getElementById("Q").click();
        document.getElementById("Q").play();
        break;
      case 87:
        document.getElementById("W").click();
        document.getElementById("W").play();
        break;
      case 69:
        document.getElementById("E").click();
        document.getElementById("E").play();
        break;
      case 65:
        document.getElementById("A").click();
        document.getElementById("A").play();
        break;
      case 83:
        document.getElementById("S").click();
        document.getElementById("S").play();
        break;
      case 68:
        document.getElementById("D").click();
        document.getElementById("D").play();
        break;
      case 90:
        document.getElementById("Z").click();
        document.getElementById("Z").play();
        break;
      case 88:
        document.getElementById("X").click();
        document.getElementById("X").play();
        break;
      case 67:
        document.getElementById("C").click();
        document.getElementById("C").play();
        break;
      default:
        break;
    }
  }

  handleButtonClick(e) {
    switch (e.target.id) {
      case "Q":
        this.setState({ text: alpha[0] });
        //document.getElementById("Q").play();
        break;
      case "W":
        this.setState({ text: alpha[1] });
        //document.getElementById("W").play();
        break;
      case "E":
        this.setState({ text: alpha[2] });
        //document.getElementById("E").play();
        break;
      case "A":
        this.setState({ text: alpha[3] });
        //document.getElementById("A").play();
        break;
      case "S":
        this.setState({ text: alpha[4] });
        //document.getElementById("S").play();
        break;
      case "D":
        this.setState({ text: alpha[5] });
        //document.getElementById("D").play();
        break;
      case "Z":
        this.setState({ text: alpha[6] });
        //document.getElementById("Z").play();
        break;
      case "X":
        this.setState({ text: alpha[7] });
        //document.getElementById("X").play();
        break;
      case "C":
        this.setState({ text: alpha[8] });
        //document.getElementById("C").play();
        break;
      default:
        break;
    }
  }

  handlePowerClick() {
    this.setState({
      powerAlphaClassName: `${
        "power-toggle-off" ? "power-toggle-on" : "power-toggle-off"
      }`,
      powerBetaClassName: `${
        "power-toggle-on" ? "power-toggle-off" : "power-toggle-on"
      }`,
      disabled: false ? true : false,
    });
  }

  handleRangeDrag(e) {
    this.setState({
      text: "Volume: " + e.target.value,
      volume: e.target.value,
    });
    document.getElementsByTagName("audio").volume = this.state.volume;
  }

  handleBankClick() {
    this.setState({
      bankAlphaClassName: `${
        "bank-toggle-off" ? "bank-toggle-on" : "bank-toggle-off"
      }`,
      bankBetaClassName: `${
        "bank-toggle-on" ? "bank-toggle-off" : "bank-toggle-on"
      }`,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div id="drum-machine">
            <div className="fcc-logo">
              <p className="fcc-text">
                FCC <i class="fa fa-free-code-camp" aria-hidden="true"></i>
              </p>
            </div>
            <div id="drum-machine-display">
              <div
                id="drum-pad-container"
                className="drum-pad-container"
                tabindex="0"
                disabled={this.state.disabled}
                onKeyDown={this.handleKeyDown}
              >
                <button
                  id="Q"
                  className="drum-pad"
                  keyCode="81"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="Q"
                    className="clip"
                    keyCode="81"
                    src="./public/audio/mixkit-acute-guitar-single-string-2325.mp3"
                  ></audio>
                  Q
                </button>
                <button
                  id="W"
                  className="drum-pad"
                  keyCode="87"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="W"
                    className="clip"
                    keyCode="87"
                    src="./public/audio/mixkit-cool-guitar-riff-2321.mp3"
                  ></audio>
                  W
                </button>
                <button
                  id="E"
                  className="drum-pad"
                  keyCode="69"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="E"
                    className="clip"
                    keyCode="69"
                    src="./public/audio/mixkit-guitar-notification-alert-2320.mp3"
                  ></audio>
                  E
                </button>
                <button
                  id="A"
                  className="drum-pad"
                  keyCode="65"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="A"
                    className="clip"
                    keyCode="65"
                    src="./public/audio/mixkit-guitar-string-tone-2326.mp3"
                  ></audio>
                  A
                </button>
                <button
                  id="S"
                  className="drum-pad"
                  keyCode="83"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="S"
                    className="clip"
                    keyCode="83"
                    src="./public/audio/mixkit-happy-guitar-chords-2319.mp3"
                  ></audio>
                  S
                </button>
                <button
                  id="D"
                  className="drum-pad"
                  keyCode="68"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="D"
                    className="clip"
                    keyCode="68"
                    src="./public/audio/mixkit-negative-guitar-tone-2324.mp3"
                  ></audio>
                  D
                </button>
                <button
                  id="Z"
                  className="drum-pad"
                  keyCode="90"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="Z"
                    className="clip"
                    keyCode="90"
                    src="./public/audio/mixkit-quick-guitar-tone-2323.mp3"
                  ></audio>
                  Z
                </button>
                <button
                  id="X"
                  className="drum-pad"
                  keyCode="88"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="X"
                    className="clip"
                    keyCode="88"
                    src="./public/audio/mixkit-short-guitar-riff-2322.mp3"
                  ></audio>
                  X
                </button>
                <button
                  id="C"
                  className="drum-pad"
                  keyCode="67"
                  onClick={this.handleButtonClick}
                >
                  <audio
                    id="C"
                    className="clip"
                    keyCode="67"
                    src="./public/audio/mixkit-short-guitar-strum-2318.mp3"
                  ></audio>
                  C
                </button>
              </div>
              <div className="controls-container">
                <div className="power-control">
                  <p className="text">Power</p>
                  <div
                    className="power-toggle"
                    tabindex="0"
                    onClick={this.handlePowerClick}
                  >
                    <div className={this.state.powerAlphaClassName}></div>
                    <div className={this.state.powerBetaClassName}></div>
                  </div>
                </div>
                <div className="text-display">
                  <p id="display" className="text-param">
                    {this.state.text}
                  </p>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="volume-control"
                  value={this.state.volume}
                  onChange={this.handleRangeDrag}
                ></input>
                <div className="bank-control">
                  <p className="text">Bank</p>
                  <div
                    className="bank-toggle"
                    tabindex="0"
                    onClick={this.handleBankClick}
                    // disabled={this.state.disabled}
                  >
                    <div className={this.state.bankAlphaClassName}></div>
                    <div className={this.state.bankBetaClassName}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
