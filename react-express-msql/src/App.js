import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentence: "React Express MySQL",
      show: false
    }
  }
  showHandler() {
    const showSentence = !this.state.show;
    this.setState({
      show: showSentence
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={this.showHandler.bind(this)}>Show</button>

        {
          this.state.show ?
            <div>
              <h1>{this.state.sentence}</h1>
            </div>
            : null
        }

      </div>
    );
  }
}

export default App;
