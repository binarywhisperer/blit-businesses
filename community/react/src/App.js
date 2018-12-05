import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: [],
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <h2>test</h2>
                {this.state.businesses.map(business =>
                    <li key={business.objectID}>
                        <a href={business.url}>{business['name']}</a>
                    </li>
                )}
            </div>
        );
    }

    componentDidMount() {
        fetch('https://blacklatinoit.com/api/businesses')
            .then(response => response.json())
            .then(data => {
                var result = Object.keys(data).map((key) => {
                    return data[key];
                });
                console.log(result);
                this.setState({ businesses: result })
            });
    }
}

export default App;