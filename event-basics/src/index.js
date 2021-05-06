import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';

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

//Book Component 
const Book = ({ img, title, author }) => {
    // Attribute , eventHandler 
    //Onclick , obMouseOver 

    const clickHandler = (e) => {
        alert("Hello World");
        console.log('You clicked the button');
        console.log(title);
        console.log(e.target); 
    }
    const complex = (author) => {
        console.log(author); 
    }
    return (<article className="book" onMouseOver={() => {
        console.log(title); 
     }}>
         <img src={img} alt="" />
         <h1>{title}</h1>
       
         <h5>{author}</h5>
         <button type="button" onClick={clickHandler}>Click here</button>
         <button type="button" onClick={() => complex(author)}>Summary</button>
         
         
     </article>); 
}    


    ReactDom.render(<BookList />, document.getElementById('root')); 
