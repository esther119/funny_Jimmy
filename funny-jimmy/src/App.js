import logo from './logo.svg';
import './App.css';

const LeftHand = require('./LeftHand');
const RightHand = require('./RightHand');
const LeftLeg = require('./LeftLeg');
const RightLeg = require('./RightLeg');
const head = require('./head');
const body = require('./body');


function App() {
  return (
    <div className="App">
      <h1>My SVG Example</h1>
      {LeftHand}
      {RightHand}
      {LeftLeg}
      {RightLeg}
      {head}
      {body}
    </div>
  );
}

export default App;
