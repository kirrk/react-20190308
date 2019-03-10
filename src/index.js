import React, { Component } from 'react'
import { render } from 'react-dom'
const style = {
    fontWeight: '700',
    fontFamily: 'Arial'
    
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
const Library = () => {
    return(
        <div>
            <h1>Welcome to the Library</h1>
            <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
            <Book title="Imagine Heaven" author="John Doe" pages={495} />
            <Book title="To Kill a Mockingbird" author="Harper Lee" pages={281} />
        </div>

    )

}

render(
        <Library />,
   
    document.getElementById('root')
)