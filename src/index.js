import React, { Component } from 'react'
import { render } from 'react-dom'

//create array of books
let bookList = [
    {
        "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages":260
    },
    {
        "title": "Imagine Heaven",
        "author": "John Doe",
        "pages": 495
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "pages": 281
    }
]


const style = {
    fontWeight: '700',
    fontFamily: 'Arial',
    color: 'grey'
    
}
const Book = ({title, author, pages}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p style={style}>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>

    )
}
const Library = ({books}) => {
    return(
        <div>
            <h1>Welcome to the Library</h1>
            {books.map(
                (book, i) => 
                <Book 
                    key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}/>
            )}
        </div>

    )

}

render(
        <Library books={bookList} />,
   
    document.getElementById('root')
)