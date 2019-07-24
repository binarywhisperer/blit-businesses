import React, { Component } from 'react';
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
            <div className="container">
               <section className="hero">
                    <div className="hero-body">
                     <div className="container">
                         <h1 className="title">
                 BLiT Businesses
                </h1>
        <h2 className="subtitle">
            by Bryce Again
        </h2>
        </div>
        </div>
        </section>
        <hr/>
        {this.state.businesses.map(business =>
                <div className="card" key={business.objectID}>
            <div className="card-content">
            <p className="title">
            {business['name']}
            </p>
            <p className="subtitle">
            {business['email']}
            </p>
            </div>
            <footer className="card-footer">
            <p className="card-footer-item">
            <span>
            <a href="{business.url}">View Website</a>
        </span>
        </p>
        </footer>
        </div>
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