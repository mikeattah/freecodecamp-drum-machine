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
    this.componentRef = React.createRef();
    this.state = {
      text: "Drum Machine",
      powerAlphaClassName: "power-toggle-off",
      powerBetaClassName: "power-toggle-on",
      bankAlphaClassName: "bank-toggle-off",
      bankBetaClassName: "bank-toggle-on",
      disabled: "",
      volume: 25,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleRangeDrag = this.handleRangeDrag.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankAlphaClassName === "bank-toggle-on"
    ) {
      switch (e.key) {
        case `q`:
          this.setState({ text: alpha[0] });
          break;
        case `w`:
          this.setState({ text: alpha[1] });
          break;
        case `e`:
          this.setState({ text: alpha[2] });
          break;
        case `a`:
          this.setState({ text: alpha[3] });
          break;
        case `s`:
          this.setState({ text: alpha[4] });
          break;
        case `d`:
          this.setState({ text: alpha[5] });
          break;
        case `z`:
          this.setState({ text: alpha[6] });
          break;
        case `x`:
          this.setState({ text: alpha[7] });
          break;
        case `c`:
          this.setState({ text: alpha[8] });
          break;
        default:
          break;
      }
    } else if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankBetaClassName === "bank-toggle-on"
    ) {
      switch (e.key) {
        case `q`:
          this.setState({ text: beta[0] });
          break;
        case `w`:
          this.setState({ text: beta[1] });
          break;
        case `e`:
          this.setState({ text: beta[2] });
          break;
        case `a`:
          this.setState({ text: beta[3] });
          break;
        case `s`:
          this.setState({ text: beta[4] });
          break;
        case `d`:
          this.setState({ text: beta[5] });
          break;
        case `z`:
          this.setState({ text: beta[6] });
          break;
        case `x`:
          this.setState({ text: beta[7] });
          break;
        case `c`:
          this.setState({ text: beta[8] });
          break;
        default:
          break;
      }
    }
  }

  handleButtonClick(e) {
    if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankAlphaClassName === "bank-toggle-on"
    ) {
      switch (e.target.id) {
        case "Q":
          this.setState({ text: alpha[0] });
          // let Q = document.getElementById("Q");
          // let audio = new Audio(Q.children[0].src);
          this.componentRef.current.children[0].play();
          break;
        case "W":
          this.setState({ text: alpha[1] });
          break;
        case "E":
          this.setState({ text: alpha[2] });
          break;
        case "A":
          this.setState({ text: alpha[3] });
          break;
        case "S":
          this.setState({ text: alpha[4] });
          break;
        case "D":
          this.setState({ text: alpha[5] });
          break;
        case "Z":
          this.setState({ text: alpha[6] });
          break;
        case "X":
          this.setState({ text: alpha[7] });
          break;
        case "C":
          this.setState({ text: alpha[8] });
          break;
        default:
          break;
      }
    } else if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankBetaClassName === "bank-toggle-on"
    ) {
      switch (e.target.id) {
        case "Q":
          this.setState({ text: beta[0] });
          break;
        case "W":
          this.setState({ text: beta[1] });
          break;
        case "E":
          this.setState({ text: beta[2] });
          break;
        case "A":
          this.setState({ text: beta[3] });
          break;
        case "S":
          this.setState({ text: beta[4] });
          break;
        case "D":
          this.setState({ text: beta[5] });
          break;
        case "Z":
          this.setState({ text: beta[6] });
          break;
        case "X":
          this.setState({ text: beta[7] });
          break;
        case "C":
          this.setState({ text: beta[8] });
          break;
        default:
          break;
      }
    }
  }

  handlePowerClick() {
    this.setState({
      powerAlphaClassName: `${
        this.state.powerAlphaClassName === "power-toggle-off"
          ? "power-toggle-on"
          : "power-toggle-off"
      }`,
      powerBetaClassName: `${
        this.state.powerBetaClassName === "power-toggle-on"
          ? "power-toggle-off"
          : "power-toggle-on"
      }`,
      disabled: `${this.state.disabled === "" ? "true" : ""}`,
    });
    if (!this.state.disabled) {
      this.setState({ text: "" });
    } else if (this.state.disabled) {
      this.setState({ text: this.state.text });
    }
  }

  handleRangeDrag(e) {
    this.setState({
      text: "Volume: " + e.target.value,
      volume: e.target.value,
    });
    let audio = document.getElementsByTagName("audio");
    audio[0].volume = this.state.volume / 100;
  }

  handleBankClick() {
    this.setState({
      bankAlphaClassName: `${
        this.state.bankAlphaClassName === "bank-toggle-off"
          ? "bank-toggle-on"
          : "bank-toggle-off"
      }`,
      bankBetaClassName: `${
        this.state.bankBetaClassName === "bank-toggle-on"
          ? "bank-toggle-off"
          : "bank-toggle-on"
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
              <div id="drum-pad-container" className="drum-pad-container">
                <button
                  id="Q"
                  className="drum-pad"
                  keyCode="81"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                  ref={(node) => (this.componentRef.current = node)}
                >
                  <audio
                    id="Q"
                    className="clip"
                    keyCode="81"
                    src="../public/audio/mixkit-acute-guitar-single-string-2325.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>Q
                </button>
                <button
                  id="W"
                  className="drum-pad"
                  keyCode="87"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="W"
                    className="clip"
                    keyCode="87"
                    src="./public/audio/mixkit-cool-guitar-riff-2321.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>W
                </button>
                <button
                  id="E"
                  className="drum-pad"
                  keyCode="69"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="E"
                    className="clip"
                    keyCode="69"
                    src="./public/audio/mixkit-guitar-notification-alert-2320.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>E
                </button>
                <button
                  id="A"
                  className="drum-pad"
                  keyCode="65"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="A"
                    className="clip"
                    keyCode="65"
                    src="./public/audio/mixkit-guitar-string-tone-2326.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>A
                </button>
                <button
                  id="S"
                  className="drum-pad"
                  keyCode="83"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="S"
                    className="clip"
                    keyCode="83"
                    src="./public/audio/mixkit-happy-guitar-chords-2319.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>S
                </button>
                <button
                  id="D"
                  className="drum-pad"
                  keyCode="68"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="D"
                    className="clip"
                    keyCode="68"
                    src="./public/audio/mixkit-negative-guitar-tone-2324.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>D
                </button>
                <button
                  id="Z"
                  className="drum-pad"
                  keyCode="90"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="Z"
                    className="clip"
                    keyCode="90"
                    src="./public/audio/mixkit-quick-guitar-tone-2323.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>Z
                </button>
                <button
                  id="X"
                  className="drum-pad"
                  keyCode="88"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="X"
                    className="clip"
                    keyCode="88"
                    src="./public/audio/mixkit-short-guitar-riff-2322.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>X
                </button>
                <button
                  id="C"
                  className="drum-pad"
                  keyCode="67"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="C"
                    className="clip"
                    keyCode="67"
                    src="./public/audio/mixkit-short-guitar-strum-2318.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume}
                  ></audio>
                  <audio src=""></audio>C
                </button>
              </div>
              <div className="controls-container">
                <div className="power-control">
                  <p className="text">Power</p>
                  <div className="power-buttons">
                    <span className="power-desc">OFF</span>
                    <div
                      className="power-toggle"
                      onClick={this.handlePowerClick}
                    >
                      <div className={this.state.powerAlphaClassName}></div>
                      <div className={this.state.powerBetaClassName}></div>
                    </div>
                    <span className="power-desc">ON</span>
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
                  disabled={this.state.disabled}
                ></input>
                <div className="bank-control">
                  <p className="text">Bank</p>
                  <div
                    className="bank-toggle"
                    onClick={!this.state.disabled && this.handleBankClick}
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
