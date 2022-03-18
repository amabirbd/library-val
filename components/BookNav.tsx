import React from 'react'
import { useDrag } from 'react-dnd';

function BookNav(props) {
    const {book} = props;

    const [{isDragging}, dragRef] = useDrag(() => ({
      type: "book",
      item: {bookId: book.id},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        item: monitor.getItem()
      })
    }))

  return (
    <div className='flex align-middle content-center shadow-md  mt-5 hover:shadow-2xl' ref={dragRef}  >
        <img className='w-24 mr-2' src={book.image} alt="book-image" />
        <div className='flex flex-col justify-center'>
            <div>{book.name}</div>
            <div>{book.author}</div>
        </div>
    </div>
  )
}

export default BookNav