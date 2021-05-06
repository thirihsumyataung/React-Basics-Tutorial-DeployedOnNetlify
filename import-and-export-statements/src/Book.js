import React from 'react'

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

export default Book

//rafce