import React, {Component} from "react";
import axios from "axios";
//mportt {Link} from "react-router-dom";

class Time extends Component {
    constructor() {
        super();

        this.state = {
            date: "",

            loading: false,
        };
    }

    componentDidMount = () => {
        this.getIpInfo();
    };


    getIpInfo = () => {
        let self = this;
        self.setState({
            loading: true,
        });

        axios.get("https://time-api-eight.vercel.app").then(response => {
            let data = response.data || {};
            self.setState({
                date: data.date || "",
                loading: false,
            });


        }).catch((err) => {
            self.setState({
                loading: false,
            });
        });
    };
    
    render = () => {
        let self = this;
        if (self.state.loading) {
            return (
                <div className="App">
                    <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <p> {self.state.date}</p>
                </div>
            );
        }

    };
}

export default Time;