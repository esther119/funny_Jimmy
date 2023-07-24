import '../styles/App.css';
import Head from './head.js';
import headimage from '../images/head.svg';

const LeftHand = require('./LeftHand');
const RightHand = require('./RightHand');
const LeftLeg = require('./LeftLeg');
const RightLeg = require('./RightLeg');
// TODO turn into a component
// const head = require('./components/head');
const body = require('./body');




function App() {
  return (
    <div className="App">
      <h1>My SVG Example</h1>
      {LeftHand}
      {RightHand}
      {LeftLeg}
      {RightLeg}
      <Head image={headimage}/>
      {body}
    </div>
  );
}

export default App;
