import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    image: null
  }

  async componentDidMount() {
    const url = 'https://randomfox.ca/floof/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({image: data.image})
  }


  render() {
  return (
    <div>
      <img src={this.state.image} width='300px' alt='fox'/>
    </div>
  );
}
}

export default App;