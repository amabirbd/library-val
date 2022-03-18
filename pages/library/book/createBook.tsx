import React, { useState } from 'react'

function CreateBook() {

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [isbn, setIsbn] = useState('')
  const [description, setDescription] = useState('')
 
  const handleBookCreateFormSubmit = (e) => {
    e.preventDefault();
    console.log("book creation form submitted");
    createBook(name, author, isbn,imageLink, description)
    
    
  }

  async function createBook(name, author, isbn, imageLink, description ) {
    const response = await fetch('/api/createBookApi', {
      method: 'POST',
      body: JSON.stringify(name, author, isbn, imageLink, description)
    }) 

    if (!response.ok) {
      throw new Error(response.statusText);

    }

    return await response.json();
  }


  return (
    <div className='w-full max-w-xs'>
      <h1 className='flex justify-center text-2xl font-bold text-red-500'>Create Book</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleBookCreateFormSubmit(e)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name" value={name} onChange={(e=> setName(e.target.value))} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="author" value={author} onChange={(e=> setAuthor(e.target.value))} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="image link" value={imageLink} onChange={(e=> setImageLink(e.target.value))} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ISBN
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="isbn" value={isbn} onChange={(e=> setIsbn(e.target.value))} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="description" value={description} onChange={(e=> setDescription(e.target.value))}/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Post
      </button>
      </form>
    </div>
  )
}

export default CreateBook