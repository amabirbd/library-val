import React from 'react'
import BookNav from './BookNav';

function Sidenav(props) {
    const { books } = props;
    

  return (
    <ul className='flex flex-col align-middle justify-center w-1/4 bg-white hover:cursor-pointer'>
        {
            books.map((book) => (
                <li key={book.id}>
                        <BookNav book={book} />
                </li>
            ))
        }
    </ul>
  )
}

export default Sidenav  