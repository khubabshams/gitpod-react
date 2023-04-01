import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <hr />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Shams" age="30" />
      <hr />
      <StatefulGreeting name="Mike" greeting="Nice to see you!" />
    </div>
  );
}

export default App;
