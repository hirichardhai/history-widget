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
        <header>
          History Widget
        </header>
        <section className='history-sections'>
          <div className='back-links'></div>
          <div className='current-link'></div>
          <div className='forward-links'></div>
        </section>
      </div>
    )
  }
}

export default App;