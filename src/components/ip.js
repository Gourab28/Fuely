import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const sl = "/";
class IpAddress extends Component {
    constructor() {
        super();

        this.state = {
            region: "",
            city: "",

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

        axios.get("http://ip-api.com/json").then(response => {
            let data = response.data || {};
            self.setState({
                region: data.regionName || "",
                city: data.city|| "",
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
                    <h1>Loading IP Address</h1>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <h1>IP: {self.state.region}, {self.state.city} </h1>
                    <Link to={"/"+self.state.region.toLowerCase().split(" ").join("-")+"/"+self.state.city.toUpperCase().split(" ").join("+")}>Test</Link>
                </div>
            );
        }

    };
}

export default IpAddress;