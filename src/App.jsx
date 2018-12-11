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

  goBack() {

  }

  goForward() {

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
          <div className='back-links'>Back Links</div>
          <div className='current-link'>Current Link {this.state.currentLink}</div>
          <div className='forward-links'>Forward Link</div>
        </section>
      </div>
    )
  }
}

export default App;