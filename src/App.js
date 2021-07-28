import React from "react";
import "normalize.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Placeholder Text",
      powerAlphaClassName: "power-toggle-off",
      powerBetaClassName: "power-toggle-on",
      bankAlphaClassName: "bank-toggle-off",
      bankBetaClassName: "bank-toggle-on",
      disabled: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleRangeDrag = this.handleRangeDrag.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
  }

  handleButtonClick() {}

  handlePowerClick() {
    this.setState({
      powerAlphaClassName: "power-toggle-off"
        ? "power-toggle-on"
        : "power-toggle-off",
      powerBetaClassName: "power-toggle-on"
        ? "power-toggle-off"
        : "power-toggle-on",
      disabled: false ? true : false,
    });
  }

  handleRangeDrag() {}

  handleBankClick() {
    this.setState({
      bankAlphaClassName: "bank-toggle-off"
        ? "bank-toggle-on"
        : "bank-toggle-off",
      bankBetaClassName: "bank-toggle-on"
        ? "bank-toggle-off"
        : "bank-toggle-on",
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
                className="drum-pad-container"
                disabled={this.state.disabled}
              >
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="Q"
                    className="clip"
                    src="./audio/mixkit-acute-guitar-single-string-2325.wav"
                  ></audio>
                  Q
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="W"
                    className="clip"
                    src="./audio/mixkit-cool-guitar-riff-2321.wav"
                  ></audio>
                  W
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="E"
                    className="clip"
                    src="./audio/mixkit-guitar-notification-alert-2320.wav"
                  ></audio>
                  E
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="A"
                    className="clip"
                    src="./audio/mixkit-guitar-string-tone-2326.wav"
                  ></audio>
                  A
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="S"
                    className="clip"
                    src="./audio/mixkit-happy-guitar-chords-2319.wav"
                  ></audio>
                  S
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="D"
                    className="clip"
                    src="./audio/mixkit-negative-guitar-tone-2324.wav"
                  ></audio>
                  D
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="Z"
                    className="clip"
                    src="./audio/mixkit-quick-guitar-tone-2323.wav"
                  ></audio>
                  Z
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="X"
                    className="clip"
                    src="./audio/mixkit-short-guitar-riff-2322.wav"
                  ></audio>
                  X
                </button>
                <button className="drum-pad" onClick={this.handleButtonClick}>
                  <audio
                    id="C"
                    className="clip"
                    src="./audio/mixkit-short-guitar-strum-2318.wav"
                  ></audio>
                  C
                </button>
              </div>
              <div className="controls-container">
                <div className="power-control">
                  <p className="text">Power</p>
                  <div className="power-toggle" onClick={this.handlePowerClick}>
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
                  onChange={this.handleRangeDrag}
                ></input>
                <div className="bank-control">
                  <p className="text">Bank</p>
                  <div
                    className="bank-toggle"
                    onClick={this.handleBankClick}
                    disabled={this.state.disabled}
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
