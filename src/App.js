import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  loadScript(src, async) {
    var tag = document.createElement('script');
    if (async) {
      tag.async = false;
    }
    tag.src = src;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
  }

  componentWillMount() {
    var a2a_config = a2a_config || {};
    a2a_config.onclick = 1;

    window.a2a_config = a2a_config;
    this.loadScript('https://static.addtoany.com/menu/page.js', true);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="addToAnyConatiner" style={{ width: '15%', margin: 'auto 0'}}>
            <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
              <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
              <a className="a2a_button_facebook"></a>
              <a className="a2a_button_twitter"></a>
              <a className="a2a_button_linkedin"></a>
              <a className="a2a_button_whatsapp"></a>
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Sample get Add To Any.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
