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
          <div className='back-links'>Back Links</div>
          <div className='current-link'>
            Current Link 
            <div>
              {this.state.renderLink}
            </div>
          </div>
          <div className='forward-links'>Forward Link</div>
        </section>
      </div>
    )
  }
}

class Stack {
  constructor() {

  }
  push() {

  }

  pop() {

  }

  size() {
    
  }

}

export default App;