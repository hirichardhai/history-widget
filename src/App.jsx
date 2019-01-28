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
    if (this.state.renderLink !== '') {
      let backLinks = this.state.backLinks;
      backLinks.unshift(this.state.renderLink);
      this.setState({ backLinks: backLinks })
    }

    let link = this.state.currentLink;
    this.setState({ renderLink: link, forwardLinks: [] });
    let inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => input.value = '');
  }

  // goBack attaches to back button that checks if there are any links in this.state.backLinks, if none, alert can't go back, if links in stack, then unshift link on top of backLinks to renderLink while also push any renderLink into forwardLinks stack
  goBack() {
    if (this.state.backLinks.length === 0) {
      alert('no links to go back to!');
      console.log('no more links to go back to!')
      return;
    } else {  
      let current = this.state.renderLink;
      let forward = this.state.forwardLinks;
      let back = this.state.backLinks;

      // currentLink must be added to top of forwardLinks stack
      forward.unshift(current);
      console.log('forward stack', forward);

      // top of backLinks stack must be the new currentLink & remove top of backLink
      let newCurrentLink = back.shift();
      console.log('newCurrentLink', newCurrentLink);

      // set state of all new things
      this.setState({ forwardLinks: forward, backLinks: back, renderLink: newCurrentLink })
    }
  }

  // goForward method button will check if there are any forward links, if none, alert no forward links, if yes, then puts the forward link on top of the stack back as the current link
  goForward() {
    if (this.state.forwardLinks.length === 0) {
      alert('no forward links available');
      console.log('no more links to go forward to!');
      return;
    } else {
      let current = this.state.renderLink;
      let forward = this.state.forwardLinks;
      let back = this.state.backLinks;

      // add renderLink to top of backLinks
      back.unshift(current);

      // remove top of forwardLinks stack and save as link
      let newLink = forward.shift();

      // set state for backLinks,renderLink, and forwardLinks
      this.setState({ backLinks: back, renderLink: newLink, forwardLinks: forward })
    }
  }

  // default method for rendering any current link from this.state.renderLink

  renderCurrentLink() {
    return (
      <div className='links'>{ this.state.renderLink }</div>
    )
  }

  // renders any links in this.state.backLinks with className links

  renderBackLinks() {
    return(
      this.state.backLinks.map(link => {
        return (
          <div className='links'>{ link }</div>
        )
      })
    )
  }

  // renders any links in this.state.forwardLinks with className links
  
  renderForwardLinks() {
    return(
      this.state.forwardLinks.map(link => {
        return (
          <div className='links'>{ link }</div>
        )
      })
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
          <div className='back-links'>{ this.renderBackLinks() }</div>
          <div className='current-link'>{ this.renderCurrentLink() }</div>
          <div className='forward-links'>{ this.renderForwardLinks() }</div>
        </section>
      </div>
    )
  }
}

export default App;