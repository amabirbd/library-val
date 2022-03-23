import { Book } from '@prisma/client';
import { useFormik } from 'formik';
import React from 'react'
import prisma from "../../../lib/prisma"


export async function getServerSideProps() {
  const books: Book[] = await prisma.book.findMany();
  return {
    props: {
      initialBooks: books
    }
  };
} 

async function createBook(book) {
  console.log("createBook called", book);
  
  const response = await fetch('/api/createBookApi', {
    method: 'POST',
    body: JSON.stringify(book)
  })

  if (!response.ok) {
    throw new Error(response.statusText);

  }
  console.log("Created Book: ", response)


  return await response.json();
}


function CreateBook({ initialBooks }) {

  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      image: "",
      isbn: "",
      description: ""
    },
    onSubmit: (values) => {
      console.log(values);
      createBook(values)
    }
  })
 
  return (
    <div className='w-full max-w-xs'>
      <h1 className='flex justify-center text-2xl font-bold text-red-500'>Create Book</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input type="text" placeholder="name" value={formik.values.name} id="name" name='name' onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input type="text" placeholder="author" value={formik.values.author} id="author" name='author' onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input type="text" placeholder="image" value={formik.values.image} id="image" name='image' onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ISBN
          </label>
          <input type="text" placeholder="isbn" value={formik.values.isbn} id="isbn" name='isbn' onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input type="text" placeholder="description" value={formik.values.description} id="description" name='description' onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Post
      </button>
      </form>
    </div>
  )
}

export default CreateBook