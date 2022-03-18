import React, { useState } from 'react'

async function createSeries(seriesTitle ) {
  const response = await fetch('/api/createSeriesApi', {
    method: 'POST',
    body: JSON.stringify(seriesTitle)
  })

  if (!response.ok) {
    throw new Error(response.statusText);

  }

  return await response.json();
}

function CreateSeries() {
  const [seriesTitle, setSeriesTitle] = useState("")


  const formSubmitHandler = async( e) => {
    e.preventDefault();
    
    setSeriesTitle(e.target.value)
    console.log(seriesTitle);

    await createSeries(seriesTitle)
    
  }

  const handleSeriesTitleChange = (e) => {
    setSeriesTitle(e.target.value)
    
  }





  return (
    <div className='w-full max-w-xs'>
      <h1 className='flex justify-center text-2xl font-bold text-red-500'>Create Series</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={async(e) => await formSubmitHandler(e)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title"  value={seriesTitle} onChange={(e) => handleSeriesTitleChange(e) } />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Post
      </button>
      </form>
    </div>
  )
}

export default CreateSeries