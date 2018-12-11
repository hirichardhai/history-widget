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

  newLink() {

  }

  render() {
    return (
      <div>
        <div className='description'>
          History Widget
        </div>
        <div className='App'>
          <div>
            <input
              type='text'
              placeholder='enter new website'

            ></input>
            <button onClick={() => this.newLink()}>Submit</button>
          </div>
          <div>
            <button onClick={ () => this.goBack() }>Go Back</button>
            <button onClick={ () => this.goForward() }>Go Forward</button>
          </div>
        </div>
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