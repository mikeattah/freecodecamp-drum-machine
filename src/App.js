import React from "react";
import "normalize.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Placeholder Text",
    };
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
            <div id="display">
              <div className="drum-pad-container">
                <button className="drum-pad">
                  <audio id="Q" className="clip" src=""></audio>Q
                </button>
                <button className="drum-pad">
                  <audio id="W" className="clip" src=""></audio>W
                </button>
                <button className="drum-pad">
                  <audio id="E" className="clip" src=""></audio>E
                </button>
                <button className="drum-pad">
                  <audio id="A" className="clip" src=""></audio>A
                </button>
                <button className="drum-pad">
                  <audio id="S" className="clip" src=""></audio>S
                </button>
                <button className="drum-pad">
                  <audio id="D" className="clip" src=""></audio>D
                </button>
                <button className="drum-pad">
                  <audio id="Z" className="clip" src=""></audio>Z
                </button>
                <button className="drum-pad">
                  <audio id="X" className="clip" src=""></audio>X
                </button>
                <button className="drum-pad">
                  <audio id="C" className="clip" src=""></audio>C
                </button>
              </div>
              <div className="controls-container">
                <div className="power-control">
                  <p className="text">Power</p>
                  <div className="power-toggle">
                    <div id="power-toggle-off"></div>
                    <div id="power-toggle-on"></div>
                  </div>
                </div>
                <div className="text-display">{this.state.text}</div>
                <input type="range" className="volume-control"></input>
                <div className="bank-control">
                  <p className="text">Bank</p>
                  <div className="bank-toggle">
                    <div id="bank-toggle-off"></div>
                    <div id="bank-toggle-on"></div>
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
