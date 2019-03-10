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
const Book = ({title, author, pages, freeBookmark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p style={style}>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no!'}</p>
        </section>

    )
}

const Hiring = () => 
    <div>
        <p>The library is hiring. Go to our website for more info.</p>
    </div>

const NotHiring = () => {
    return (
    <div>
        <p>The librarry is NOT hiring. Check back at a later date.</p>
    </div>
    )
}

class Library extends Component {
   
    state = { 
        open: false,
        freeBookmark: false,
        hiring: true    
    
    }
    
   
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open

        }))
    }

    render () {
        console.log(this.state)
        const { books } = this.props
        return(
            <div>
            <h1>Welcome to the Library - the library is {this.state.open ? 'open' : 'closed'}</h1>
            <p>{this.state.hiring ? <Hiring /> : <NotHiring />}</p>
            
            <button onClick = { this.toggleOpenClosed }>Change</button>

                {books.map(
                    (book, i) => 
                      <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}/>
            )}
        </div>

         )

    }

}

render(
        <Library books={bookList} />,
   
    document.getElementById('root')
)