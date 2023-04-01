
import React from "react";


class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intro: "Hello!",
            btnText: "Exit"
        }
    }

    handleClick() {
        this.setState({
            intro: this.state.intro == "Hello!"? "Goodbye!": "Hello!",
            btnText: this.state.btnText == "Exit"? "Enter": "Exit",
        }, () => {
            console.log("new state: ",this.state)
        });
        console.log("old state: ",this.state)
    }

    render() {
        return (
            <div>
                <div>Stateful (Class) Component</div>
                <div>{this.state.intro} {this.props.greeting}</div>
                <button onClick={() => this.handleClick()}>{this.state.btnText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;