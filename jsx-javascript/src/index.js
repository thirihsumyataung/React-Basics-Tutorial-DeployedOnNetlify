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
const author = "📝 by Rachel Hanna "
const Book = () => {
    const title = "The Beach House 👑";
    
     return (<article className="book">
         <img src="https://m.media-amazon.com/images/I/51DNaiWfllL.jpg" alt="" />
         <h1>{title}</h1>
         <h5 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '5px' }}>{author.toUpperCase()}</h5>
         <p>{12 * 3}</p>
     </article>); 
}    



ReactDom.render(<BookList/>, document.getElementById('root'));
