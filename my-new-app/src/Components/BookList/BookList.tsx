import './BookList.css';

import React from 'react'

export const BookList = () => {
    const bookLists = [{title : "book1", author : "haim1", year : "1991"},{title : "book2", author : "haim2", year : "1992"},{title : "book3", author : "haim3", year : "1993"},{title : "book4", author : "haim4", year : "1994"}]
  return (
    <div>
        {bookLists.map((book, index) =>(
            <div key={index}>
                <h4>Title: {book.title}</h4>
                <h4>Author: {book.author}</h4>
                <h4>Year: {book.year}</h4>
            </div>
        ))}
    </div>
  )
}
