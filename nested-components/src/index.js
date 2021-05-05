import React from 'react';
import ReactDom from 'react-dom';

// Nested Components and React Tools 
function Greeting() {
    return (
        <React.Fragment>
            <Person/>
            <Message/>
        </React.Fragment>
    )
}

const Person = () => {
    return <h2>Ying Tee</h2>
}
const Message = () => {
    return <p>This is my message.</p>
}
 

ReactDom.render(<Greeting />, document.getElementById('root'));
