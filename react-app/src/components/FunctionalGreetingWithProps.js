import React from "react";

const FunctionalGreetingWithProps = (props) => {

    return <div>Functional Greeting with props: Hello, {props.name}! I see you're {props.age} years old; {props.greeting}!</div>
}

export default FunctionalGreetingWithProps;
