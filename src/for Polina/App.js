import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    content: null,
    author: null
  }

  async componentDidMount() {
    const url = 'https://api.quotable.io/random';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({content: data.content, author: data.author})
  }


  render() {
  return (
    <div>
      <p>{this.state.author}: {this.state.content}</p>
    </div>
  );
}
}

export default App;
