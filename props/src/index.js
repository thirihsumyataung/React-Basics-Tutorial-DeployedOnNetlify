import React from 'react';
import ReactDom from 'react-dom';
//import Book from './components/Booklist.js';

//CSS

import './index.css';

//Set up vars

// const author = "📝 by Rachel Hanna "; 
// const title = "The Beach House 👑"; 
// const img = "https://m.media-amazon.com/images/I/51DNaiWfllL.jpg";

const firstbook = {
    img: "https://m.media-amazon.com/images/I/51DNaiWfllL.jpg", 
    title: "The Beach House 👑",
    author: "📝 by Rachel Hanna "
    
}

const secondbook = {
    img: "https://m.media-amazon.com/images/I/51BK2HZdAHL.jpg", 
    title: "The Restarting Point 📌",
    author: "📝 by Marci Bolden"
    
}
function BookList() {
    return (
        <section className="bookList">
            <Book img={firstbook.img} title={firstbook.title} author={firstbook.author}>
                <p>
                    A searing summer thriller - an unstoppable tale of love and vengeance among the super-rich and super-ruthless. Jack Mullen is in law school in New York City when the news comes that his brother, Peter, has drowned in the ocean off East Hampton.
                </p>
            </Book> 
            <Book img={secondbook.img} title={secondbook.title} author={secondbook.author}>
                <p>
                    The Restarting Point is the debut book of the series of Chammont Point. It talks about Jade Kelly, a cancer survivor with a new lease on life, and is trying to start to take things slow and savor everything that comes her way.
                </p></Book>
        </section>
    )
}
// } <h1>{title}</h1>
//          <h5 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '5px' }}>{author.toUpperCase()}</h5>
         
//props is parameter and it can name whatever we wants in function 
const Book = (props) => {
    //console.log({ img, title, author }); 
    console.log(props);
    // //Destructing props 

    const {img, title, author} = props; 
     return (<article className="book">
         <img src={img} alt="" />
         <h1>{title}</h1>
         {props.children}
         <h5>{author}</h5>
         
         
     </article>); 
}    


    ReactDom.render(<BookList />, document.getElementById('root')); 
