import { Component } from "react";

class App extends Component {

    state = {
        image: null
    }

    async componentDidMount() {
        const url = 'https://random.dog/woof.json';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({image: data.url})
    }

    render() {
        return (
            <div>
                <img src={this.state.image} width='300px' alt="dog"/>
            </div>
        )
    }
}

export default App;