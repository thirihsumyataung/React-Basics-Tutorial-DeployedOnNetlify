import React from 'react';
import ReactDom from 'react-dom';

//Stateless functional componenent 
// always return JSX
function Greeting() {
  return <h4>This is Ying Tee and this is my first component. </h4>
}

// const Greeting =() => 
// { return React.createElement( 'h1', {} , 'Hello World'); 
  
// } // create an element named h1 and {} = prop and "content" = "hello world" 

ReactDom.render(<Greeting />, document.getElementById('root'));
//If we want to render --> function name must be capitalized. 