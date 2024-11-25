import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Preview from './components/preview';

class App extends Component {
  state = {
    body: "<p>Here you can drop the title:</p><h1> Your Title</h1><h2>Here a nice subtitle</h2><p><strong>Here you make your point</strong><br/><lu>and why not a list:<li>first item</li><li>second item</li></lu><br></br><p>KISS</p><blockquote>Keep It Simple And Stupid</blockquote><footer>This markdown previewer was realized by Sara Rizzardini for the Front End Libraries Certification of freeCodeCamp</footer> ",
  };

  update = (event) => {
    this.setState({ body: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <br />
          <textarea
            id="editor"
            className="form-control-plaintext form-control-lg"
            spellCheck="false"
            value={this.state.body}
            style={{ width: "100%", height: "auto" }}
            onChange={this.update}
          />
          <p></p>
          {/* Pass the body state as a prop to the Preview component */}
          <Preview body={this.state.body} />
        </div>
      </div>
    );
  }
}

export default App;
