import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div className={"currentTime"}>
                {"it's "}
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

module.exports.Clock = Clock;
