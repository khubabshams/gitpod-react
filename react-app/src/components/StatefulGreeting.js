
import React from "react";


class StatefulGreeting extends React.Component {
    render() {
        return <div>Hello, I am {this.props.name}, {this.props.greeting}</div>
    }
}

export default StatefulGreeting;