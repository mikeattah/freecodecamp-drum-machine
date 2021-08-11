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
  constructor(props) {
    super(props);
    this.state = {
      text: "Drum Machine",
      powerAlphaClassName: "power-toggle-off",
      powerBetaClassName: "power-toggle-on",
      bankAlphaClassName: "bank-toggle-off",
      bankBetaClassName: "bank-toggle-on",
      disabled: "",
      volume: 25,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleClickAndPlay = this.handleClickAndPlay.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleRangeDrag = this.handleRangeDrag.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handlePlay(x) {
    let playElement = document.querySelector(`audio#${x}.clip`);
    console.log(playElement);
    playElement.play();
  }

  handleClickAndPlay(x) {
    let a = x.toUpperCase();
    let clickElement = document.querySelector(`button#${a}.drum-pad`);
    let playElement = document.querySelector(`audio#${a}.clip`);
    console.log(clickElement, playElement);
    clickElement.click();
    playElement.play();
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankAlphaClassName === "bank-toggle-on"
    ) {
      const a = e.key.toLowerCase();
      switch (a) {
        case `q`:
          this.setState({ text: alpha[0] });
          this.handleClickAndPlay(`q`);
          break;
        case `w`:
          this.setState({ text: alpha[1] });
          this.handleClickAndPlay(`w`);
          break;
        case `e`:
          this.setState({ text: alpha[2] });
          this.handleClickAndPlay(`e`);
          break;
        case `a`:
          this.setState({ text: alpha[3] });
          this.handleClickAndPlay(`a`);
          break;
        case `s`:
          this.setState({ text: alpha[4] });
          this.handleClickAndPlay(`s`);
          break;
        case `d`:
          this.setState({ text: alpha[5] });
          this.handleClickAndPlay(`d`);
          break;
        case `z`:
          this.setState({ text: alpha[6] });
          this.handleClickAndPlay(`z`);
          break;
        case `x`:
          this.setState({ text: alpha[7] });
          this.handleClickAndPlay(`x`);
          break;
        case `c`:
          this.setState({ text: alpha[8] });
          this.handleClickAndPlay(`c`);
          break;
        default:
          break;
      }
    } else if (
      this.state.powerBetaClassName === "power-toggle-on" &&
      this.state.bankBetaClassName === "bank-toggle-on"
    ) {
      const b = e.key.toLowerCase();
      switch (b) {
        case `q`:
          this.setState({ text: beta[0] });
          this.handleClickAndPlay(`q`);
          break;
        case `w`:
          this.setState({ text: beta[1] });
          this.handleClickAndPlay(`w`);
          break;
        case `e`:
          this.setState({ text: beta[2] });
          this.handleClickAndPlay(`e`);
          break;
        case `a`:
          this.setState({ text: beta[3] });
          this.handleClickAndPlay(`a`);
          break;
        case `s`:
          this.setState({ text: beta[4] });
          this.handleClickAndPlay(`s`);
          break;
        case `d`:
          this.setState({ text: beta[5] });
          this.handleClickAndPlay(`d`);
          break;
        case `z`:
          this.setState({ text: beta[6] });
          this.handleClickAndPlay(`z`);
          break;
        case `x`:
          this.setState({ text: beta[7] });
          this.handleClickAndPlay(`x`);
          break;
        case `c`:
          this.setState({ text: beta[8] });
          this.handleClickAndPlay(`c`);
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
          this.handlePlay("Q");
          break;
        case "W":
          this.setState({ text: alpha[1] });
          this.handlePlay("W");
          break;
        case "E":
          this.setState({ text: alpha[2] });
          this.handlePlay("E");
          break;
        case "A":
          this.setState({ text: alpha[3] });
          this.handlePlay("A");
          break;
        case "S":
          this.setState({ text: alpha[4] });
          this.handlePlay("S");
          break;
        case "D":
          this.setState({ text: alpha[5] });
          this.handlePlay("D");
          break;
        case "Z":
          this.setState({ text: alpha[6] });
          this.handlePlay("Z");
          break;
        case "X":
          this.setState({ text: alpha[7] });
          this.handlePlay("X");
          break;
        case "C":
          this.setState({ text: alpha[8] });
          this.handlePlay("C");
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
          this.handlePlay("Q");
          break;
        case "W":
          this.setState({ text: beta[1] });
          this.handlePlay("W");
          break;
        case "E":
          this.setState({ text: beta[2] });
          this.handlePlay("E");
          break;
        case "A":
          this.setState({ text: beta[3] });
          this.handlePlay("A");
          break;
        case "S":
          this.setState({ text: beta[4] });
          this.handlePlay("S");
          break;
        case "D":
          this.setState({ text: beta[5] });
          this.handlePlay("D");
          break;
        case "Z":
          this.setState({ text: beta[6] });
          this.handlePlay("Z");
          break;
        case "X":
          this.setState({ text: beta[7] });
          this.handlePlay("X");
          break;
        case "C":
          this.setState({ text: beta[8] });
          this.handlePlay("C");
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
      this.setState({ text: "Drum Machine" });
    }
  }

  handleRangeDrag(e) {
    this.setState({
      text: "Volume: " + e.target.value,
      volume: e.target.value,
    });
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
                FCC <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              </p>
            </div>
            <div id="drum-machine-display">
              <div id="drum-pad-container" className="drum-pad-container">
                <button
                  ref={(node) => (this.Qbutton = node)}
                  id="Q"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="Q"
                    className="clip"
                    src="/audio/mixkit-acute-guitar-single-string-2325.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  Q
                </button>
                <button
                  id="W"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="W"
                    className="clip"
                    src="/audio/mixkit-cool-guitar-riff-2321.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  W
                </button>
                <button
                  id="E"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="E"
                    className="clip"
                    src="/audio/mixkit-guitar-notification-alert-2320.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  E
                </button>
                <button
                  id="A"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="A"
                    className="clip"
                    src="/audio/mixkit-guitar-string-tone-2326.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  A
                </button>
                <button
                  id="S"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="S"
                    className="clip"
                    src="/audio/mixkit-happy-guitar-chords-2319.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  S
                </button>
                <button
                  id="D"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="D"
                    className="clip"
                    src="/audio/mixkit-negative-guitar-tone-2324.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  D
                </button>
                <button
                  id="Z"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="Z"
                    className="clip"
                    src="/audio/mixkit-quick-guitar-tone-2323.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  Z
                </button>
                <button
                  id="X"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="X"
                    className="clip"
                    src="/audio/mixkit-short-guitar-riff-2322.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  X
                </button>
                <button
                  id="C"
                  className="drum-pad"
                  onClick={this.handleButtonClick}
                  disabled={this.state.disabled}
                >
                  <audio
                    id="C"
                    className="clip"
                    src="/audio/mixkit-short-guitar-strum-2318.mp3"
                    type="audio/mpeg"
                    volume={this.state.volume / 100}
                    autoplay
                  ></audio>
                  C
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
