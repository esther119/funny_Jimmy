import './App.css';

const LeftHand = require('./components/LeftHand');
const RightHand = require('./components/RightHand');
const LeftLeg = require('./components/LeftLeg');
const RightLeg = require('./components/RightLeg');
const head = require('./components/head');
const body = require('./components/body');


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
