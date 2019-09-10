import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  // constructor(props) { // be promoted into a class
  //   super(props);
  //   this.state = { clicked: false }; // defines initial state
  // }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }

  render () {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="cute kitty" className='gif'
          onClick={this.handleClick}/>
    );
  }
}

export default Gif;
