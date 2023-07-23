// Import the html-react-parser package
const React = require('react');
const htmlReactParser = require('html-react-parser');


// Your SVG code
const svgCode = '<svg width="400" height="110"><rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" /></svg>';

// Convert the SVG code to JSX
const svgComponent = htmlReactParser(svgCode);

// Export the JSX component so you can use it in other files
module.exports = svgComponent;
