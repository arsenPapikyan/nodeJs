let React = require('react');
let ReactDOM = require('react-dom');
import Header from './partials/Header.jsx';



console.log(Header);


let hello = React.createElement('h1', null, "Hello Worldfg");
ReactDOM.render(React.createElement(Header, null,), document.getElementById('header'));
