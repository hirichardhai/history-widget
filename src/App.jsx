import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backLinks: [],
      currentLink: '',
      renderLink: '',
      forwardLinks: []
    }
  }

  newLink() {
    let link = this.state.currentLink;
    this.setState({ renderLink: link });
    let inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => input.value = '');
  }

  goBack() {
    let newBackLinks = this.state.backLinks;
    let backLinkTest = newBackLinks.concat(this.state.renderLink);
    this.setState({ backLinks: backLinkTest })
  }

  goForward() {

  }

  renderCurrentLink() {
    return (
      <div>{this.state.renderLink}</div>
    )
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
              onChange={event => this.setState({ currentLink: event.target.value })}
            ></input>
            <button onClick={() => this.newLink()}>Submit</button>
          </div>
          <div>
            <button onClick={ () => this.goBack() }>Go Back</button>
            <button onClick={ () => this.goForward() }>Go Forward</button>
          </div>
        </div>
        <section className='history-sections'>
          <div>Back Links</div>
          <div>Current Link</div>
          <div>Forward Link</div>
        </section>
        <section className='history-links'>
          <div className='back-links'>test</div>
          <div className='current-link'>{this.renderCurrentLink()}</div>
          <div className='forward-links'></div>
        </section>
      </div>
    )
  }
}

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if(this.count !== 0){
      this.count--;
    }
    return temp;
  }

  size() {
    return this.count;
  }
}

export default App;