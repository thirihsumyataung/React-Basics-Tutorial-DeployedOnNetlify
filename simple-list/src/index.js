import React from 'react';
import ReactDom from 'react-dom';
//import Book from './components/Booklist.js';

//CSS

import './index.css';

//Set up vars

// const author = "📝 by Rachel Hanna "; 
// const title = "The Beach House 👑"; 
// const img = "https://m.media-amazon.com/images/I/51DNaiWfllL.jpg";

const books = [

    {
    id: 1, 
    img: "https://m.media-amazon.com/images/I/51DNaiWfllL.jpg", 
    title: "The Beach House 👑",
    author: "📝 by Rachel Hanna "
    
}, 
    {
    id: 2, 
    img: "https://m.media-amazon.com/images/I/51BK2HZdAHL.jpg", 
    title: "The Restarting Point 📌",
    author: "📝 by Marci Bolden"
    
    },
    {
    id: 3, 
    img: "https://m.media-amazon.com/images/I/512oLKXu8DL.jpg", 
    title: "The Wedding At Seagrove 💖",
    author: "📝 by Rachel Hanna"
    
}

]

//  <Book img={firstbook.img} title={firstbook.title} author={firstbook.author}>
//                 <p>
//                     A searing summer thriller - an unstoppable tale of love and vengeance among the super-rich and super-ruthless. Jack Mullen is in law school in New York City when the news comes that his brother, Peter, has drowned in the ocean off East Hampton.
//                 </p>
//             </Book> 
//             <Book img={secondbook.img} title={secondbook.title} author={secondbook.author}>
//                 <p>
//                     The Restarting Point is the debut book of the series of Chammont Point. It talks about Jade Kelly, a cancer survivor with a new lease on life, and is trying to start to take things slow and savor everything that comes her way.
//                 </p></Book>


// const names = ['Jasmine', 'Rose', 'Cherry', 'Berry', 'Mango'];
// const newNames = names.map((name) => {
//     console.log(name);
//     return <h5>{name}</h5>
// });
//console.log(newNames); 

//Key is the special props in map and unique 
function BookList() {
    return (
        <section className="bookList">
            {books.map((book) => {
               
                return (
                    <Book key={book.id} {...book}></Book>
                )
            })}
        </section>
    )
}
// if we spread out the book here , we don't need to use props.book here . onlu props is enough. 
const Book = (props) => {
    
    console.log(props);
 

    const {img, title, author} = props; 
     return (<article className="book">
         <img src={img} alt="" />
         <h1>{title}</h1>
         {props.children}
         <h5>{author}</h5>
         
         
     </article>); 
}    


    ReactDom.render(<BookList />, document.getElementById('root')); 
