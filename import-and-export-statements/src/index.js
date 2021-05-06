import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';

import { books } from './books'; 
import SpecificBook from './Book';
import { greeting } from './testing/testing.js'; 
//Key is the special props in map and unique 
function BookList() {
    console.log(greeting); 
    return (
        <section className="bookList">
            {books.map((book) => {
               
                return (
                    <SpecificBook key={book.id} {...book}></SpecificBook>
                )
            })}
        </section>
    )
}
// if we spread out the book here , we don't need to use props.book here . onlu props is enough. 



    ReactDom.render(<BookList />, document.getElementById('root')); 
