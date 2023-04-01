import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <hr/>
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Shams" age="30"/>
    </div>
  );
}

export default App;
