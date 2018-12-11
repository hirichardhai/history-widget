import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backLinks: [],
      currentLink: '',
      forwardLinks: []
    }
  }

  render() {
    return (
      <div>
        <div className='description'>
          History Widget
        </div>
        <div className='App'>
          <header>
            <input
              type='text'
              placeholder='enter new website'

            ></input>
            <button onClick={() => this.newLink()}>Submit</button>
          </header>
          <section className='history-sections'>
            <div className='back-links'></div>
            <div className='current-link'></div>
            <div className='forward-links'></div>
          </section>
        </div>

      </div>
    )
  }
}

export default App;