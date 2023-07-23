// Import the html-react-parser package
const React = require('react');
const htmlReactParser = require('html-react-parser');

// Your SVG code
const svgCode = '<svg width="100" height="100"> <circle cx="50" cy="50" r="40" fill="blue" /> </svg>'

// Convert the SVG code to JSX
const svgComponent = htmlReactParser(svgCode);

// Export the JSX component so you can use it in other files
module.exports = svgComponent;
