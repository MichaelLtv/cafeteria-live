import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_hours: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://api.uwaterloo.ca/v2/foodservices/locations.json?key=1602fe1b27c726c1eb5dd4697d28a280')
        .then(results => {
            return results.json();
        }).then(data => {
            let opening_hours = data.results.map((hours) => {
                return(
                    <div key={hours.results}>
                        <p>
                            {hours.opening_hours}
                        </p>
                    </div>
                )
            })
            this.setState({opening_hours: opening_hours})
        })
    }

        render() {
            return (
                <div>
                    {this.state.opening_hours}
                </div>
            )
    }

}