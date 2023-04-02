
import React from "react";


class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intro: "Hello!",
            btnText: "Exit",
            count: 0,
        }
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            return { count: prevState.count + 1, }
        });
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                intro: prevState.intro == "Hello!" ? "Goodbye!" : "Hello!",
                btnText: prevState.btnText == "Exit" ? "Enter" : "Exit",
            }
        });
    }

    render() {
        return (
            <div>
                <div>Stateful (Class) Component</div>
                <div>Counter: {this.state.count} </div>
                <div>{this.state.intro} {this.props.greeting}</div>
                <button onClick={() => this.handleClick()}>{this.state.btnText}</button>
                <button onClick={() => this.incrementCount()}>Increment Counter</button>
            </div>
        )
    }
}

export default StatefulGreeting;