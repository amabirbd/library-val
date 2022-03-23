import React from 'react'

function Card(props) {
    const {book} = props;

    // console.log("book in card", book);
    
  return (
    <div className='flex flex-col px-5 '>
        <img className='div w-52' src={book.image} />
        <div className="flex flex-wrap flex-row p-5 text-xl ">{book.name}</div>
        <div className="flex"><span className="flex text-gray-600 px-2">Author: </span>{book.author}</div>
        <div className="text-gray-500 underline"> {book.series}</div>
    </div>
  )
}

export default Card