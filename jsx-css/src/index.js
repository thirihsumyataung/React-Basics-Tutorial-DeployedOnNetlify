import React from 'react';
import ReactDom from 'react-dom';
//import Book from './components/Booklist.js';

//CSS

import './index.css'; 
function BookList() {
    return(
        <section className="bookList">
            <Book />          
        </section>
    )
}
 const Book = () => {
     return (<article className="book">
         <Images />
         <Title />
         <Author/>
     </article>); 
}    

const Images =() => <img src="https://m.media-amazon.com/images/I/51DNaiWfllL.jpg" alt =""/>

const Title = () => <h1>The Beach House</h1>

const Author = () => <h5 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '5px'}}>by Rachel Hanna</h5>

ReactDom.render(<BookList/>, document.getElementById('root'));
