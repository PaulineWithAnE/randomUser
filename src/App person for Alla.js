import { Component } from "react";

class App extends Component {

    state = {
        image: null,
        name: null,
        email: null
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            name: data.results[0].name.first + ' ' + data.results[0].name.last,
            email: data.results[0].email,
            image: data.results[0].picture.large
        });
    }

    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <img src={this.state.image} width='100px' alt="person"/>
            </div>
        )
    }
}

export default App;