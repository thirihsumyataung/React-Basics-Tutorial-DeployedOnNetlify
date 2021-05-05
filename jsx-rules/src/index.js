import React from 'react';
import ReactDom from 'react-dom';


function Greeting() {
    return (
        <React.Fragment>
 <div>
            <h4>This is Ying Tee and this is my first component. </h4>
            <ul>
                <li>
                    <a href="https://www.youtube.com/"> YouTube </a>
                    </li>
                 <li>
                        <a href = "https://blog.twitter.com/">Twitter</a>
                </li>
                 <li>
                        <a href ="https://www.facebook.com/"> Facebook</a>
                 </li>
                </ul>
                <input type = "text" name = "" id =""></input>

        </div>

        </React.Fragment>
       
    
    );
    
}

ReactDom.render(<Greeting/>, document.getElementById('root')); 