import React from 'react';
import ReactDom from 'react-dom';
//import Book from './components/Booklist.js';

function BookList() {
    return(
        <section>
            <Book />          
        </section>
    )
}
 const Book = () => {
     return (<article>
         <Images />
         <Title />
         <Author/>
     </article>); 
}    

const Images =() => <img src="https://m.media-amazon.com/images/I/51DNaiWfllL.jpg" alt =""/>

const Title = () => <h1>The Beach House</h1>

const Author = () => <h5>by Rachel Hanna</h5>

ReactDom.render(<BookList/>, document.getElementById('root'));
